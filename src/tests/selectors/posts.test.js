import postsSelector from './../../selectors/posts';
import posts from './../fixtures/posts';

test('should filter by text filter', () => {
   const filteredPosts = postsSelector(posts, { 
      text: 'first',
      sortBy: 'title'
   });
   expect(filteredPosts).toEqual([posts[0]]);
});

test('should sort by title', () => {
   const mixedPosts = [posts[2], posts[0], posts[1]];
   const sortedPosts = postsSelector(mixedPosts, {
      text: '',
      sortBy: 'title'
   });
   expect(sortedPosts).toEqual([posts[0], posts[1], posts[2]]);
});

test('should sort by date', () => {
   const sortedPosts = postsSelector(posts, {
      text: '',
      sortBy: 'date'
   });
   expect(sortedPosts).toEqual([posts[2], posts[1], posts[0]]);
});