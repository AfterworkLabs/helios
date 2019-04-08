import { combineReducers } from 'redux'
import Immutable from 'seamless-immutable'
import ActionTypes from '../action_types/index.js'
import { DECK_NAME_LIST } from '../utils/constants.jsx';

const control = (state = Immutable({
  drawer_open: false,
  width: '540px',
  deckValue: 0,
  deckLabel: DECK_NAME_LIST[0],
  isMobile: true,
}), action) => {
  switch (action.type) {
    case ActionTypes.OPEN_DRAWER: {
      return Immutable({
        ...state,
        drawer_open: true
      })
    }
    case ActionTypes.CLOSE_DRAWER: {
      return Immutable({
        ...state,
        drawer_open: false
      })
    }
    case ActionTypes.UPDATE_VIDEO_WIDTH: {
      return Immutable({
        ...state,
        width: action.width
      })
    }
    case ActionTypes.UPDATE_DECK_LABEL: {
      return Immutable({
        ...state,
        deckLabel: action.label
      })
    }
    case ActionTypes.UPDATE_DECK_VALUE: {
      return Immutable({
        ...state,
        deckValue: action.value
      })
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  control
})

export default rootReducer
