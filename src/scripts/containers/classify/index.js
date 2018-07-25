
import React, {Component} from 'react'
import {NavLink} from "react-router-dom";


export default class classify extends Component{
    state={
        type:["玄幻","修真","都市","历史","其他"]
    }
    render(){
        return(
            <div className="classify clear">
                <NavLink to={"/app/classifyList?class="+this.state.type[0]}>
                   <div className="classify_list list1">
                    <p><i className="iconfont icon-qihuan"></i></p>
                    <h3>{this.state.type[0]}</h3>
                   </div>
                </NavLink>
                <NavLink to={"/app/classifyList?class="+this.state.type[1]}>
                   <div className="classify_list list2">
                   <p><i className="iconfont icon-gushu"></i></p>
                    <h3>{this.state.type[1]}</h3>
                   </div>
                </NavLink>
                <NavLink to={"/app/classifyList?class="+this.state.type[2]}>
                   <div className="classify_list list3">
                   <p><i className="iconfont icon-suozaichengshi"></i></p>
                    <h3>{this.state.type[2]}</h3>
                   </div>
                </NavLink>
                <NavLink to={"/app/classifyList?class="+this.state.type[3]}>
                   <div className="classify_list list list4">
                   <p><i className="iconfont icon-lishi"></i></p>
                    <h3>{this.state.type[3]}</h3>
                   </div>
                </NavLink>
                <NavLink to={"/app/classifyList?class="+this.state.type[4]}>
                   <div className="classify_list list5">
                   <p><i className="iconfont icon-gengduo"></i></p>
                    <h3>{this.state.type[4]}</h3>
                   </div>
                </NavLink>
            </div>
        )
    }
}
