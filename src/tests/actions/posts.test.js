import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
   addPost,
   editPost,
   removePost,
   setPosts,
   startAddPost,
   startEditPost,
   startRemovePost,
   startSetPosts
} from './../../actions/posts';
import posts from './../fixtures/posts';
import database from './../../firebase/firebase';

const uid = 'thisIsMyTestUID';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
   const postsData = {};
   posts.forEach(({ id, title, body, createdAt }) => {
      postsData[id] = { title, body, createdAt }
   })
   database.ref(`users/${uid}/posts`).set(postsData).then(() => done());
});

// ADD_POST
test('should setup addPost action', () => {
   const action = addPost(posts[0]);
   expect(action).toEqual({
      type: 'ADD_POST',
      post: posts[0]
   });
});

// START_ADD_POST
test('should add post to database and store', async done => {
   const store = createMockStore(defaultAuthState);
   const postData = {
      title: 'new post',
      body: 'some body',
      createdAt: 1000
   };
   await store.dispatch(startAddPost(postData));
   const actions = store.getActions();
   expect(actions[0]).toEqual({
      type: 'ADD_POST',
      post: {
         id: expect.any(String),
         ...postData
      }
   });
   const snapshot = await database.ref(`users/${uid}/posts/${actions[0].post.id}`).once('value');
   expect(snapshot.val()).toEqual(postData);
   done();
});

// EDIT_POST
test('should setup editPost action', () => {
   const action = editPost('12', {title: 'updated title'});
   expect(action).toEqual({
      type: 'EDIT_POST',
      id: '12',
      updates: {title: 'updated title'}
   });
});

// START_EDIT_POST
test('should edit post in the database and in the store', async done => {
   const store = createMockStore(defaultAuthState);
   const updates = {
      title: 'updated title'
   };
   await store.dispatch(startEditPost(posts[0].id, updates));
   const actions = store.getActions();
   expect(actions[0]).toEqual({
      type: 'EDIT_POST',
      id: posts[0].id,
      updates
   });
   const snapshot = await database.ref(`users/${uid}/posts/${posts[0].id}`).once('value');
   expect(snapshot.val()).toEqual({
      ...updates,
      body: posts[0].body,
      createdAt: posts[0].createdAt
   });
   done();
});

// REMOVE_POST
test('should setup removePost action', () => {
   const action = removePost('12');
   expect(action).toEqual({
      type: 'REMOVE_POST',
      id: '12'
   });
});

// START_REMOVE_POST
test('should remove post from database and store', async done => {
   const store = createMockStore(defaultAuthState);
   await store.dispatch(startRemovePost(posts[1].id));
   const actions = store.getActions();
   expect(actions[0]).toEqual({
      type: 'REMOVE_POST',
      id: posts[1].id
   });
   const snapshot = await database.ref(`users/${uid}/posts/${posts[1].id}`).once('value');
   expect(snapshot.val()).toBeFalsy();
   done();
});

// SET_POSTS
test('should setup setPosts action', () => {
   const action = setPosts(posts);
   expect(action).toEqual({
      type: 'SET_POSTS',
      posts
   });
});

// START_SET_POSTS
test('should add posts from database to store', async done => {
   const store = createMockStore(defaultAuthState);
   await store.dispatch(startSetPosts());
   const actions = store.getActions();
   expect(actions[0]).toEqual({
      type: 'SET_POSTS',
      posts
   });
   done();
});