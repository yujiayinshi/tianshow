import * as type from '../constants/actionTypes'
import createReducer from './creator'

const show = createReducer({}, {
  [type.QUERY_SHOW_CONTENT + type.REQUEST] (state, action) {
    return {...state, text: action.text}
  },
  [type.INPUT_TEXT + type.REQUEST] (state, action) {//输入文本
    return { ...state, value: action}
  },
  [type.BACKGROUND_COLOR + type.REQUEST] (state, action) {//背景颜色
    return { ...state, bgColor: action.bgColor}
  },
  [type.ELEMENT_ENTITY + type.REQUEST] (state, action) {//最终传到后台数据
    return { ...state, elementsEntity: action}
  },
  [type.SELECT_BACKGROUND_IMG + type.REQUEST] (state, action) {//背景图片路径
    return { ...state, bgImgUrl: action}
  },
})

export default show
