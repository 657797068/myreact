import React,{Component} from "react";
import Foot from "../../components/foot";
import Head from "../../components/head"
import { WingBlank, WhiteSpace,Toast, Grid } from "antd-mobile";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import {bookrack} from "../../actions"
@connect(
    state=>(
        {
            bookrackList:state.bookrackList
        }
    )
)
export default class Layout extends Component{

    loading(){
        Toast.success('加载成功!!!', 0.5);
    }
    componentWillMount(){
        const {dispatch} =this.props;
        this.username = localStorage.username;
        dispatch(bookrack("/bookrack?username="+this.username,this.loading));
    }
render(){
    return(
        
       <div style={{backgroundColor:"#fff"}}>
           <Head show="" title="我的书架" icon=""/>
           <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            
           <div className="myBooks">
          
            {
                 this.username&&this.props.bookrackList.map?this.props.bookrackList.map((item,index)=>(
                   <div className="myBook"  key={index}>
                        <NavLink to={"/app/detail?id="+item.id}>
                            <div className="myBook_images">
                            <img src={item.images} alt="暂无图片"/>
                            <h3>{item.name}</h3>
                            </div>
                        </NavLink>
                    </div>
                )):<div style={{textAlign:"center"}}>你还没有收藏过书籍</div>
            }
            <div className="myBook">
                <NavLink to={"/app/home"}>
                    <p>+</p>
                </NavLink>
            </div >
           </div>
           <WhiteSpace size="lg" />
           <Foot/>
       </div>
    )
}
}


