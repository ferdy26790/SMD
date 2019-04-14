export default (state = {
  status: 'loading',
  id:'',
  name: '',
  email: '',
  body: '',
  comments: [],
}, action) => {
  switch (action.type) {
   case 'POST_DETAIL_SUCESS':
    return {
     ...action.payload
    }
   default:
    return state
  }
 }