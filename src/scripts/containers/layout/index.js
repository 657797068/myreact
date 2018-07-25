import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Guide from "../guide";
import App from "../app";
export default class Layout extends Component{
render(){
    return(
        <Route
        render = {
            ({match,history,location})=>(
                <Switch>
                    <Route path="/" exact component={Guide}/>
                    <Route path="/app/:tab?" component={App}/>
                </Switch>
            )
         }
         />
    )
}
}