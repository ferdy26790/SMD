import React, { Component } from 'react'
import NavigateBack from './NavigateBack'

export default class UserCardDetail extends Component {
  render() {
    const {user} = this.props
    return (
      <div className="card">
            <div className="card-body">
              <p className="card-text">
                Name : {`${user.name}`}
              </p>
              <p className="card-text">
                Email : {`${user.email}`}
              </p>
              <p className="card-text">
                Address : {`${user.address.city}`}
              </p>
              <p className="card-text">
                Company : {`${user.company.name}`}
              </p>
              <br />
              <h4>{user.name} Posts</h4>
              <div className="other_posts">
              {
                user.posts.map(post => <div key={post.id} className="card bg-secondary mb-3" style={{maxWidth: "18rem", marginRight: "1rem"}}>
                <div onClick={() => this.props.handleClickPostDetail('postDetail', post.id)} className="card-body pointer">
                  <h4 className="card-title">{post.title.substring(0,10)}...</h4>
                  <p className="card-text">{post.body.substring(0,20)}...</p>
                  <br />
                  <a className="card-link">See Detail</a>
                </div>
              </div>)
              }
              </div>
              <br />
              <h4>{user.name} Albums</h4>
              <div className="list-group">
                {
                  user.albums.map(album => (
                  <div key={album.id} className="album_bar">
                    <div onClick={() => this.props.handleClickPostDetail('albumsDetail', album.id)} className="list-group-item list-group-item-action pointer" style={{width: "30rem"}}>
                      {album.title}
                    </div>
                  </div>
                  ))
                }
              </div>
            </div>
        </div>
    )
  }
}
