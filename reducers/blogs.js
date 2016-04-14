import { ADD_ITEM, DEL_ITEM, EDIT_ITEM, ADD_IMG, DEL_IMG } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'My first blog',    
    id: 1,
    tFlag:true,
    pic:[],
  }
]

export default function blogs(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:      
      return [
        {
          id: state.reduce((maxId, blog) => Math.max(blog.id, maxId), -1) + 1,          
          text: action.text,
          tFlag:true,
          pic:action.pic,
        }, 
        ...state
      ]

    case DEL_ITEM:
      return state.filter(blog =>
        blog.id !== action.delItemId
      )

    case EDIT_ITEM:
      return state.map(blog =>
        blog.id === action.editItemId ?
          Object.assign({}, blog, { text: action.text, pic:action.pic }) :
          blog
      )

    case ADD_IMG:            
      return state.map(blog =>
        blog.id === action.id ?
          Object.assign({}, blog, { pic:action.pic }) :
          blog
      )
//todo
    case DEL_IMG:
      const areAllMarked = state.every(blog => blog.completed)
      return state.map(blog => Object.assign({}, blog, {
        completed: !areAllMarked
      }))
    
    default:
      return state
  }
}
