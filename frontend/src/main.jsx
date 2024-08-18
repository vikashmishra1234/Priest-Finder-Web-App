import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Components/redux/store.js';
import { Provider } from 'react-redux'
import ContextState from './Context/ContexState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextState>

    <App />
    </ContextState>
    </Provider>,
)
