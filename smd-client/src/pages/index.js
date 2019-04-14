import React, { Component } from 'react'
import Header from '../components/Header';
import { fetchUser } from  '../actions/user';
import './style.css';
import { connect } from 'react-redux';

import HomePage from './homePages/homePage';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
   getUser: () => dispatch(fetchUser()) 
 })

export default connect(mapStateToProps, mapDispatchToProps) (class PagesLayout extends Component {
  componentDidMount = async() => {
    await this.props.getUser()
  }
  renderControlPanel = () => {
    const { user } = this.props
    if(user.status === 'sucess') {
      return (
        <>
        {/* CONTROL PANEL */}
        <div className="panel_control" >
        <div className="card mb-3" style={{width:'20rem'}}>
        <h3 className="card-header">Welcome {`${user.username}`} !</h3>
        <div className="card-body">
          <h5 className="card-title">Your Profile</h5>
          <br />
          <h6 className="card-subtitle text-muted">{user.email}l</h6>
        </div>
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
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">My Posts</li>
          <li className="list-group-item">My Albums</li>
          <li className="list-group-item">Logout</li>
        </ul>
        {/* <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div> */}
      </div>
      </div>
                {/* END OF PANEL */}
      </>
      )
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <div className="page_wrap">
          <div className="content_container">
          {this.renderControlPanel()}
          {/* CONTENT PAGE */}
          <HomePage />
          </div>
        </div>
          
      </div>
    )
  }
})
