import React, { Component } from 'react'
import PostCardDetail from '../../components/PostCardDetail'
import NavigateBack from '../../components/NavigateBack'
import { connect } from 'react-redux';
import {fetchPostDetail} from '../../actions/postDetail'

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
   getPostDetail: (otherUserId) => dispatch(fetchPostDetail(otherUserId)) 
 })

export default connect(mapStateToProps, mapDispatchToProps)(class OtherUserPostDetail extends Component {
  componentDidMount = async() => {
    await this.props.getPostDetail(this.props.postId)
  }
  render() {
    const { postDetail } = this.props
    if (postDetail.status === "sucess") {
      return (
        <div>
          <NavigateBack handleClickBack={() => this.props.handleClickMenu('userDetail', postDetail.userId)}/>
        <PostCardDetail postDetail={postDetail}/>
        </div>
      )
    } else {
      return null
    }
  }
})
