import * as types from '../constants/ActionTypes'

export function addBlog(text,picLoading) {
  return {
    type: types.ADD_ITEM,    
    text,    
    picLoading,
    createAt: Date.now()  
  };
}

export function addBlogAsync(text,pic,id,picLoading) {
  return dispatch => {
    console.info("11 picLoading is "+ id +"  " + picLoading);
    dispatch(addBlog(text,picLoading));
    if(picLoading){
      console.info("22 picLoading is " + id +"  " + picLoading);
      setTimeout(function(){dispatch(addImg(pic,id,picLoading))},10000);
      
    }
  }
}

export function delBlog(delItemId) {
  return {
    type: types.DEL_ITEM,
    delItemId
  };
}


function addImg(pic,id,picLoading) {
  return {
    type: types.ADD_IMG,    
    pic,   
    picLoading   
  };
}

export function delImg(delImgId) {
  return {
    type: types.DEL_IMG,
    delImg
  };
}

export function editBlogAsync(editItemId, text,pic,picLoading) {
  return dispatch => {
    dispatch(editText(editItemId,text,picLoading));
    return  dispatch(addImg(pic,editItemId,picLoading))
  }

}

function editText(editItemId, text,picLoading) {
  return {
    type: types.EDIT_TEXT,
    editItemId,
    text,
    picLoading
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
