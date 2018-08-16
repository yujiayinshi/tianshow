import { QUERY_SHOW_CONTENT } from '../constants/actionTypes'
import axios from 'axios'

export function queryShowContent (params) {
  return {
    actionType: QUERY_SHOW_CONTENT
    //callAPI: axios.get('/api/index-content', {params})
  }
}