import ActionTypes from '../action_types/index.js'

export const openDrawer = () => ({
  type: ActionTypes.OPEN_DRAWER,
})

export const closeDrawer = () => ({
  type: ActionTypes.CLOSE_DRAWER,
})

export const updateVideoWidth = width => ({
  type: ActionTypes.UPDATE_VIDEO_WIDTH,
  width
})

export const updateDeckLabel = label => ({
  type: ActionTypes.UPDATE_DECK_LABEL,
  label
})

export const updateDeckValue = value => ({
  type: ActionTypes.UPDATE_DECK_VALUE,
  value
})
