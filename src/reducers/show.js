import * as type from '../constants/actionTypes'
import createReducer from './creator'

const show = createReducer({}, {
  [type.QUERY_SHOW_CONTENT + type.REQUEST] (state, action) {
    return {...state, text: action.text}
  },
  [type.INPUT_TEXT + type.REQUEST] (state, action) {//输入文本
    return { ...state, value: action}
  },
  [type.BACKGROUND_COLOR + type.REQUEST] (state, action) {//bgColor
    return { ...state, bgColor: action.bgColor}
  },
  [type.ELEMENT_ENTITY + type.REQUEST] (state, action) {//bgColor
    console.log('state',state);
    return { ...state, elementsEntity: action}
  },
})

export default show
