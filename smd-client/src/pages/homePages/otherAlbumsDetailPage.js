import React, { Component } from 'react'
import NavigateBack from '../../components/NavigateBack';
import { connect } from 'react-redux';
import {fetchPhotosAlbum} from '../../actions/photosAlbum'

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
   getPhotosAlbum: (albumId) => dispatch(fetchPhotosAlbum(albumId)) 
 })

export default connect(mapStateToProps, mapDispatchToProps) (class OtherAlbumsDetailPage extends Component {
  componentDidMount = async() => {
    await this.props.getPhotosAlbum(this.props.albumsId)
  }
  render() {
    if(this.props.photos.status === "sucess") {
      return (
        <div>
          <NavigateBack handleClickBack={() => this.props.handleClickMenu('userDetail', this.props.otherUserDetail.id)}/>
          <div className="list-group">
    
            <div className="list-group-item  flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.title}</h5>
              </div>
              <br />
              <div className="photos_wrap">
                {
                  this.props.photos.photos.map(photo => <img onClick={() => this.props.handleClickMenu('photoDetail', photo.id, photo)} key={photo.id} className="pointer" src={photo.thumbnailUrl}/>)
                }
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
})
