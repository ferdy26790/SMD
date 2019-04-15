import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavigateBack from '../../components/NavigateBack';

const mapStateToProps = state => ({
  ...state
 })

export default connect(mapStateToProps) (class PhotoDetailPage extends Component {
  state = {
    titleAlbum: ''
  }
  componentDidMount = () => {
    this.props.otherUserDetail.albums.map(album => {
      if(album.id === this.props.dataProps.albumId) {
        this.setState({
          titleAlbum: album.title
        })
      }
    })

  }
  render() {
    return (
      <div>
      <NavigateBack handleClickBack={() => this.props.handleClickMenu('albumsDetail', this.props.dataProps.albumId, this.state.titleAlbum)}/>
      <div>
        <div className="card mb-3">
          {/* <h5 className="card-header">Card header</h5> */}
          <div className="card-body">
            <h5 className="card-title">{this.props.dataProps.title}</h5>
            {/* <h6 className="card-subtitle text-muted">Support card subtitle</h6> */}
          </div>
          <img src={this.props.dataProps.url}/>
          <div className="card-body">
            {/* <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a> */}
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
          <div className="card-footer text-muted">
            
          </div>
        </div>
      </div>
      </div>
    )
  }
})
