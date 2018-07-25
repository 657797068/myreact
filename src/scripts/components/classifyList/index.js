import React,{Component} from  "react";
import Head from "../head"
import { getUrlParams } from "../../components/function";
import {connect} from "react-redux";
import { classifyList } from "../../actions";
import { List, WhiteSpace,Toast} from "antd-mobile";
import {NavLink} from "react-router-dom"

const Item = List.Item;
const Brief = Item.Brief;

@connect(
    state=>(
        {
            classList:state.classList
        }
    )
)
// const style ={
//     width: 400,
//     height: 600,
// }

export default class ClassifyList extends Component{
    loading(){
        Toast.success('加载成功!!!', 0.5);
    }

    componentWillMount(){
        Toast.loading("加载中",3);
        this.title = getUrlParams().class;
        const {dispatch} = this.props;
        console.log(this.props)
        dispatch(classifyList("/classifyList?title="+this.title,this.loading))
    }
   
    render(){
        const style ={
            width: 400,
            height: 600,
        }
        return(
            <div className="classifyList">
                <Head show="left" title={this.title} icon="" history={this.props.history}/>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                {/* { this.props.bookContent.map((item,index)=>( */}
                { this.props.classList.map((item,index)=>(
                    <List key={index}>
                     <NavLink to={"/app/detail?id="+item.id}>
                    <Item
                       arrow="horizontal"
                       thumb={item.images}
                       multipleLine
                    //    onClick={() => }
                       >
                       <p>{item.name}</p>
                       <Brief>{item.intro}</Brief>
                       <Brief><span className="classify_left"><i className="iconfont icon-shouye"></i>&nbsp;{item.author}</span><span className="classify_right">连载{item.wordcount}万字</span></Brief>
                       </Item>
                       </NavLink>
                   </List>
                   ))
                }
                 
            </div>
        )
    }
}