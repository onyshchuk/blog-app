export default (posts, { text, sortBy } ) => {
   return posts.filter(post => post.title.includes(text))
               .sort((a, b) => {
                  if(sortBy === 'title') 
                     return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
                  if(sortBy === 'date') 
                     return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
               });
}