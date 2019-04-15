import React, { Component } from 'react'
import ListUser from './listsUserPage'; 
import OtherUserDetail from './otherUserDetailPage'
import OtherUserPostDetail from './otherUserPostDetailPage'
import OtherAlbumsDetail from './otherAlbumsDetailPage';
import PhotoDetailPage from './photoDetailPage';

export default class HomePages extends Component {
  state = {
    menu: {
      active: 'default',
      id: null,
      dataProps: null,
    }
  }
  handleClickMenuHome = (menu, id, dataProps=this.state.menu.dataProps) => {
    console.log('jalan')
    this.setState({
      menu: {
        ...this.state.menu,
        active: menu,
        id: id,
        dataProps: dataProps
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
        return <OtherAlbumsDetail handleClickMenu={this.handleClickMenuHome} albumsId={this.state.menu.id} title={this.state.menu.dataProps}/>
      case 'photoDetail':
        return <PhotoDetailPage handleClickMenu={this.handleClickMenuHome} dataProps={this.state.menu.dataProps}/>
      default:
        return <ListUser handleClickUserList={this.handleClickMenuHome}/>
        // return <PhotoDetailPage />
    }
  }
}
