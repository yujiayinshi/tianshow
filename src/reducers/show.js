import * as type from '../constants/actionTypes'
import createReducer from './creator'

const show = createReducer({}, {
  [type.QUERY_SHOW_CONTENT + type.REQUEST] (state, action) {
    return {...state, loading: true}
  }
})

export default show
