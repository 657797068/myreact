console.log("react + webpack 入口文件")
import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";


const routElement = document.getElementById("app");
import {HashRouter as Router,BrowserRouter} from  "react-router-dom";
import {Provider} from "react-redux";
import Layout from "./containers/layout";
import store from "./store";
const hotRender = (Component)=>(
    render(
        < Provider store={store} >
            <Router basename="/">
                <Component/>
            </Router>
        </Provider>,
       routElement
    )
)
// import App from "./components/app";
// hotRender(App)

// import App from "./components/app";


hotRender(Layout);