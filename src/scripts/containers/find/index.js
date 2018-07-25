import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Foot from "../../components/foot";
import Head from "../../components/head";
import { NoticeBar, WhiteSpace, SearchBar } from "antd-mobile";


export default class Layout extends Component{

    onChange= (value) => {
        console.log(value)
      };
render(){
    const type = this.props.flag?"play":"pause"
    return(
       <div>
           <Head show="" title="发现" icon="ellipsis"/>
           <WhiteSpace size="lg" />
           <WhiteSpace size="lg" />
           <WhiteSpace size="lg" />
           <WhiteSpace size="lg" />
           <SearchBar
        //    style={{martin}}
            placeholder="搜索"
            onChange={this.onChange}
        />
        <div  className={"find"+type}><img id="find_img" src={require("../../../assets/images/images.jpg")} alt=""/></div>
        <audio  controls src="http://47.94.208.182/mp/Sugar.mp3">
        你的浏览器不支持请升级浏览器
        </audio>
        
        <Foot/>
       </div>
    )
}
}