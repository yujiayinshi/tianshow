import { QUERY_SHOW_CONTENT,INPUT_TEXT,BACKGROUND_COLOR,ELEMENT_ENTITY,SELECT_BACKGROUND_IMG } from '../constants/actionTypes'
import axios from 'axios'

export function queryShowContent (params) {
  return {
    actionType: QUERY_SHOW_CONTENT,
    payload: params
    //callAPI: axios.get('/api/index-content', {params})
  }
}

//编辑文字
export function inputText (params) {
    return {
        actionType: INPUT_TEXT,
        payload: params
    }
}

//背景颜色
export function backgroundColor (params) {
    return {
        actionType: BACKGROUND_COLOR,
        payload: params
    }
}

//背景图片
export function selectBackgroundImg (params) {
    return {
        actionType: SELECT_BACKGROUND_IMG,
        payload: params
    }
}



//保存数据
export function getElement (params) {
    return {
        actionType: ELEMENT_ENTITY,
        payload: params
    }
}

export function upDataElementEntity(obj){
    return(dispatch,getState)=>{
        const data = getState().show.elementsEntity || {};
        console.log('data',data);
        dispatch(getElement(Object.assign(data,obj)))
    }
}