export default (state = {
  status: 'loading',
  photos: []
}, action) => {
  switch (action.type) {
   case 'PHOTOS_ALBUM_SUCESS':
    return {
     ...action.payload
    }
   default:
    return state
  }
 }