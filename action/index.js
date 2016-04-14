import * as types from '../constants/ActionTypes'

export function addBlog(text,pic) {
  return {
    type: types.ADD_ITEM,    
    text,
    pic    
  };
}

export function delBlog(delItemId) {
  return {
    type: types.DEL_ITEM,
    delItemId
  };
}

export function addImg(pic,id) {
  return {
    type: types.ADD_IMG,    
    pic,  
    id,  
  };
}

export function delImg(delImgId) {
  return {
    type: types.DEL_IMG,
    delImg
  };
}

export function editBlog(editItemId, text,pic) {
  return {
    type: types.EDIT_ITEM,
    editItemId,
    text,
    pic
  };
}