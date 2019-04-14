import React, { Component } from 'react'

export default class UserCard extends Component {
  render() {
    const { user } = this.props
    return (
      <div onClick={() => this.props.handleClickUser('userDetail', user.id)} className="card pointer" style={{marginTop:'1rem', width:"15rem", marginRight:"1rem"}}>
          <div className="card-body" >
            <h6 className="card-subtitle mb-2 ">{user.name} - {user.username}</h6>
            <div style={{color: "red"}} className="card-link">Visit</div>
          </div>
        </div>
    )
  }
}
