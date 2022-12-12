import React from 'react'
//import App from 'base-shell/lib'
import { App } from './App'

//import _config from './config'
import './index.css'
import reportWebVitals from './reportWebVitals'


import { createRoot } from 'react-dom/client'

createRoot(document.getElementById("root")).render(
//    <App config={_config} />
    <App />
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
