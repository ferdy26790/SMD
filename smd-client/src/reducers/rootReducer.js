import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import otherUserDetail from './otherUserDetail';
import postDetail from './postDetail';
import photos from './photos';
export default combineReducers({
 user,
 users,
 otherUserDetail,
 postDetail,
 photos
});