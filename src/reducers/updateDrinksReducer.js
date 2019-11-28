import { DEFAULT_ECDH_CURVE } from "tls";

export default function reducer(state, action) {
  //REDUCER
  //responds to dispatch call
  //each case returns the new state
  switch(action.type) {
    case 'INCREASE':
      console.log('increase dispatched')
      return action.value

    case 'DECREASE':
      return action.value

    default:
      throw new Error('invalid dispatch action')
  }
}