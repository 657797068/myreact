import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Head from "../../components/head"
import Foot from "../../components/foot"
import Banner from "../../components/banner";
import Tabs from "../../components/tabs";
import Classify from "../../containers/classify"
import { WhiteSpace } from "antd-mobile";
export default class Home extends Component{
   
render(){
        
    return(
        
       <div>
           <Head show="" title="首页" icon="ellipsis"/>
           <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
           <Banner/>
           <Classify/>
           <Tabs history={this.props.history}/>
           <Foot/>
       </div>

    )
}
}