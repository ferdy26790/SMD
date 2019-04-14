export const fetchUsers = () => dispatch => {
  console.log('door')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => 
    dispatch({
      type: 'USERS_SUCESS',
      payload: {users:[...json], status:'sucess'}
     })
  )
 }