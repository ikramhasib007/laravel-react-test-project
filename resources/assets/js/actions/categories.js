// Add Category
export const addCategory = ({
    name = 'Category title',
    created_at = 0
  } = {}) => ({
    type: 'ADD_CATEGORY',
    post: {
      id: uuid(),
      name,
      created_at
    }
  });
  // Remove Category
  export const removeCategory = (id) => ({
      type: 'REMOVE_CATEGORY',
      id
  });
  // Remove Category
  export const editCategory = (id, updates) => ({
      type: 'EDIT_CATEGORY',
      id,
      updates
  });
  // Set Categories
  export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    categories
  });
  // Start Set Categories
  export const startSetCategories = () => {
    return (dispatch) => {
      return axios.get('/api/category').then((response) => {
        dispatch(setCategories(response.data));
      });
    }
  };