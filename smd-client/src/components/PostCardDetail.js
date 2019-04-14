import React, { Component } from 'react'

export default class PostCardDetail extends Component {
  render() {
    const {postDetail} = this.props
    return (
      <div className="list-group">
        <div href="#" className="list-group-item flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{postDetail.title}</h5>
            <small className="text-muted"> </small>
          </div>
          <p className="mb-1">{postDetail.body}</p>
          <br />
          <h6 className="mb-1">Comments</h6>
          
          
            <div className="form-group">
              <div className="input-group mb-3">
                <input type="text" className="form-control"/>
                <div className="input-group-append">
                  <span className="input-group-text badge-info">sent</span>
                </div>
              </div>
            </div>
          
            <ul className="list-group">
              {postDetail.comments.map(comment => <li className="list-group-item justify-content-between align-items-center">
              <span className="badge" style={{paddingLeft: "0"}}>{comment.name} - {comment.email}</span>
                <p>{comment.body}</p>
              </li>)}
            </ul>

        </div>
      </div>
    )
  }
}
