import postsReducer from './../../reducers/postsReducer';
import posts from './../fixtures/posts';

test('should setup default state', () => {
   const state = postsReducer(undefined, '@@INIT');
   expect(state).toEqual([]);
});

test('should add post', () => {
   const post = {
      title: 'some title',
      body: 'some body',
      createdAt: 0
   };
   const action = {
      type: 'ADD_POST',
      post
   };
   const state = postsReducer(posts, action);
   expect(state).toEqual([...posts, post]);
});

test('should edit post by id', () => {
   const updates = { title: 'updated title' };
   const action = {
      type: 'EDIT_POST',
      id: posts[1].id,
      updates
   };
   const state = postsReducer(posts, action);
   expect(state[1].title).toBe('updated title');
});

test('should remove post by id', () => {
   const action = {
      type: 'REMOVE_POST',
      id: posts[1].id
   };
   const state = postsReducer(posts, action);
   expect(state.find(post => post.id === posts[1].id)).toBe(undefined);
});

test('should set posts to state', () => {
   const action = {
      type: 'SET_POSTS',
      posts
   };
   const state = postsReducer(undefined, action);
   expect(state).toEqual(posts);
});