import { REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes'
export default function callAPIMiddleware ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      const {
        actionType,
        callAPI,
        payload = {},
        after,
        source,
        data
      } = action

      if (!actionType) {
        return next(action)
      }

      if (typeof actionType !== 'string') {
        throw new Error('Expected string actionType.')
      }

      const requestType = actionType + REQUEST
      const successType = actionType + SUCCESS
      const failureType = actionType + FAILURE
      if (source) {
        window.onunload = () => {
          source.cancel()
        }
        // source.cancel('请求已被手动取消')
      }
      dispatch(Object.assign({}, payload, {
        type: requestType
      }))
      if (callAPI) {
        return callAPI.then(
          response => {
            if (response) {
              if (response.data && response.data.success) {
                dispatch(Object.assign({}, payload, {
                  response: response.data,
                  type: successType
                }))
                if (after) {
                  after()
                }
              } else {
                dispatch(Object.assign({}, payload, {
                  response: response.data,
                  type: failureType
                }))
                if (after) {
                  after()
                }
              }
            }
          },
          error => dispatch(Object.assign({}, payload, {
            error: error,
            type: failureType
          }))
        )
      } else if (data) {
        return dispatch(Object.assign({}, payload, {
          response: data,
          type: successType
        }))
      }
    }
  }
}
