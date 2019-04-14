import React, { Component } from 'react'
import ListUser from './listsUserPage'; 
import OtherUserDetail from './otherUserDetailPage'
import OtherUserPostDetail from './otherUserPostDetailPage'
import OtherAlbumsDetail from './otherAlbumsDetailPage';

export default class HomePages extends Component {
  state = {
    menu: {
      active: 'default',
      id: null,
    }
  }
  handleClickMenuHome = (menu, id) => {
    console.log('jalan')
    this.setState({
      menu: {
        active: menu,
        id: id
      }
    })
  }
  render() {
    console.log(this.state)
    switch (this.state.menu.active) {
      case 'userDetail':
        return <OtherUserDetail handleClickMenu={this.handleClickMenuHome} userId={this.state.menu.id}/>
      case 'postDetail':
        return <OtherUserPostDetail handleClickMenu={this.handleClickMenuHome} postId={this.state.menu.id}/>
      case 'albumsDetail':
        return <OtherAlbumsDetail handleClickMenu={this.handleClickMenuHome} albumsId={this.state.menu.id}/>
      default:
        return <ListUser handleClickUserList={this.handleClickMenuHome}/>
        // return <OtherAlbumsDetail />
    }
  }
}
