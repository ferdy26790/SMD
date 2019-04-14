export default (state = {
  status: 'loading',
  id: '',
  name: '',
  email: '',
  company: ''
}, action) => {
  switch (action.type) {
   case 'USER_SUCESS':
    return {
     ...action.payload
    }
   default:
    return state
  }
 }