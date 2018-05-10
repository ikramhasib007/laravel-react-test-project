// Add Post
export const addPost = ({
  title = 'post title',
  category_id = 0,
  body = 'post body',
  created_at = 0
} = {}) => ({
  type: 'ADD_POST',
  post: {
    id: uuid(),
    title,
    category_id,
    body,
    created_at
  }
});
// Remove Post
export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});
// Remove Post
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});