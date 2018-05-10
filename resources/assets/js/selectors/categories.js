// Get Visible Categories
const getVisibleCategories = (categories, {text, startDate, endDate, sortBy}) => {
    return categories.filter((category) => {
      const startDateMatch = typeof startDate !== 'number' || post.created_at >= startDate;
      const endDateMatch = typeof endDate !== 'number' || post.created_at <= endDate;
      const textMatch = category.name.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if(sortBy === 'date'){
        return a.created_at < b.created_at ? 1 : -1;
      }
    })
};

export default getVisibleCategories;