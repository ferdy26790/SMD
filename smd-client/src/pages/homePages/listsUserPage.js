import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/users'

import UserCard from '../../components/UserCard'

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
   getUsers: () => dispatch(fetchUsers()) 
 })

export default connect(mapStateToProps, mapDispatchToProps) (class ListUsers extends Component {
  componentDidMount = async() => {
    console.log('compdidmount')
    if(this.props.users.status !== 'sucess') {
      await this.props.getUsers()
    }
  }
  render() {
    return (
      <div className="list-group">
        <h3 style={{paddingTop: '1rem'}}>Other Users</h3>
        <div style={{display:"flex", flexWrap:"wrap", }}>
          {this.props.users.users.map(user => <UserCard key={user.id} user={user} handleClickUser={this.props.handleClickUserList}/>)}
        </div>
      </div>
    )
  }
})
