export const fetchPostDetail = (postId) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(postData => 
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(commentsData => {
      dispatch({
        type: 'POST_DETAIL_SUCESS',
        payload: { ...postData, comments: commentsData, status:'sucess'}
       })
    })
  )
 }