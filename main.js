import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import App from './src/components/App'

//Render our application
render(
    <Provider>
    <App/>
</Provider>, document.getElementById('app'))