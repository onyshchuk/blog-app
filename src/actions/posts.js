import database from './../firebase/firebase';
 
export const addPost = post => ({
   type: 'ADD_POST',
   post
});

export const startAddPost = postData => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const { title, body, createdAt} = postData;
      const post = { title, body, createdAt };
      return database.ref(`users/${uid}/posts`).push(post).then(ref => {
         dispatch(addPost({
            id: ref.key,
            ...post
         }));
      });
   };
};

export const editPost = (id, updates) => ({
   type: 'EDIT_POST',
   id,
   updates
});

export const startEditPost = (id, updates) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
         dispatch(editPost(id, updates));
      });
   };
};

export const removePost = id => ({
   type: 'REMOVE_POST',
   id
});

export const startRemovePost = id => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
         dispatch(removePost(id));
      });
   };
};

export const setPosts = posts => ({
   type: 'SET_POSTS',
   posts
});

export const startSetPosts = () => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts`).once('value').then(snapshot => {
         const posts = [];
         snapshot.forEach(snapshotChild => {
            posts.push({ id: snapshotChild.key, ...snapshotChild.val() })
         });
         return dispatch(setPosts(posts));
      })
   };
};