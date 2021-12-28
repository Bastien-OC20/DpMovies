// Store/configureStore.js
import React from 'react'
import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'

export default createStore(toggleFavorite)
