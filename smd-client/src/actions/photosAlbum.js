export const fetchPhotosAlbum = (albumsId) => dispatch => {
  console.log('door')
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumsId}/photos`)
  .then(response => response.json())
  .then(json => {
    console.log(json, 'llll')
    const photosArr = []
    json.map(p => {
      console.log((p.albumId === albumsId), albumsId)
      if(+p.albumId === +albumsId) {
        photosArr.push(p)
      }
    })
    dispatch({
      type: 'PHOTOS_ALBUM_SUCESS',
      payload: {photos:[...photosArr], status:'sucess'}
     })
  })
 }