export const fetchUser = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => 
    dispatch({
      type: 'USER_SUCESS',
      payload: {...json, status:'sucess'}
     })
  )
 }