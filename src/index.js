import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
const store = compose(applyMiddleware(thunk))(createStore)(reducers)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))