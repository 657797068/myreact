
import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
require("./index.scss");


export default class Foot extends Component {

    state = {
        footList:[
          {path:"/app/bookrack",txt:"书架",icon:"icon-shu" },
          {path:"/app/home",txt:"精品" ,icon:"icon-weibiaoti2fuzhi13"},
          {path:"/app/find",txt:"发现", icon:"icon-faxian"},
          {path:"/app/my",txt:"我",icon:"icon-shouye"}
      ]}

    render(){
        return (
            <footer>
                {
                    this.state.footList.map((foot,index)=>(
                        <div key={index}>
                            <NavLink to={foot.path} activeClassName="ft-active-1">
                             <i className={"iconfont " + foot.icon}></i>
                                <span>{foot.txt}</span>
                            </NavLink>
                        </div>
                    ))
                }
            </footer>
        )
    }
}