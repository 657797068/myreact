import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Foot from "../../components/foot";
import Head from "../../components/head"
import { List, WhiteSpace,Toast} from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;


export default class Layout extends Component{
   componentWillMount(){
       this.username = localStorage.username;
        var data = new Date();
        var hours = data.getHours();
        var minutes = data.getMinutes();
        console.log(minutes)
        this.data = (hours>=10?hours:"0"+hours)+":"+(minutes>=10?minutes:"0"+minutes);
        console.log(this.data)
    }
render(){
    return(
       <div>
           <Head show="" title="我的" icon=""/>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
           <List>
           <Item
           className="myList"
           extra={this.data}
           align="top"
           thumb={require("../../../assets/images/my.png")}
           multipleLine
           >
            <p>
                <a href="#/app/register">{this.username?this.username:"登录"}</a>
            </p>
            <Brief>余额<span>0.00</span></Brief>
            </Item>
            <WhiteSpace size="lg" style={{background:"#ddd"}} />
           <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
            >我的</Item>
            <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
            >钱包</Item>
            <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
            >
            消费记录
            </Item>
            <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
            >
            我的收藏
            </Item>
            <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
            >
            意见反馈
            </Item>
        </List>
           <Foot/>
       </div>
    )
}
}