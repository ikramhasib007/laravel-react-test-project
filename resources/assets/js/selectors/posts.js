// Get Visible Posts
const getVisiblePosts = (posts, {text, startDate, endDate, sortBy}) => {
    return posts.filter((post) => {
      const startDateMatch = typeof startDate !== 'number' || post.created_at >= startDate;
      const endDateMatch = typeof endDate !== 'number' || post.created_at <= endDate;
      const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if(sortBy === 'date'){
        return a.created_at < b.created_at ? 1 : -1;
      }
    })
};

export default getVisiblePosts;