export default (state = {
  status: 'loading',
  username: '',
  name: '',
  email: '',
  company: '',
  posts: [],
  albums: []
}, action) => {
  switch (action.type) {
   case 'OTHER_USER_DETAIL_SUCESS':
    return {
     ...action.payload
    }
   default:
    return state
  }
 }