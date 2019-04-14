import React, { Component } from 'react'
import UserCardDetail from '../../components/UserCardDetail'
import NavigateBack from '../../components/NavigateBack'
import { connect } from 'react-redux';
import {fetchOtherUser} from '../../actions/otherUserDetail'

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
   getOtherUser: (otherUserId) => dispatch(fetchOtherUser(otherUserId))
 })

export default connect(mapStateToProps, mapDispatchToProps) (class otherUserDetail extends Component {
  componentDidMount = async() => {
    await this.props.getOtherUser(this.props.userId)
  }
  render() {
    const { otherUserDetail } = this.props
    if (otherUserDetail.status === 'sucess') {
      return (
        <div>
          <NavigateBack handleClickBack={() => this.props.handleClickMenu('','')}/>
          <UserCardDetail handleClickPostDetail={this.props.handleClickMenu} user={otherUserDetail}/>
        </div>
      )
    }
    return null
  }
})
