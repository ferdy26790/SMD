export const fetchOtherUser = (userId) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => response.json())
  .then(otherUserData => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(otherUserPosts => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(otherUserAlbums => {
        dispatch({
          type: 'OTHER_USER_DETAIL_SUCESS',
          payload: {...otherUserData, posts: otherUserPosts, albums: otherUserAlbums, status:'sucess'}
         })
      })
    })
  }
  )
 }