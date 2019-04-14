export default (state = {
  status: 'loading',
  users: []
}, action) => {
  switch (action.type) {
   case 'USERS_SUCESS':
    return {
     ...action.payload
    }
   default:
    return state
  }
 }