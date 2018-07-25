import React ,{Component} from "react";
import Head from "../../components/head";
import { connect } from "react-redux";
import { look_Book, book_content } from "../../actions";
import {Toast,NavBar,Icon, WingBlank, WhiteSpace, SegmentedControl, Flex, Button} from "antd-mobile";
import { getUrlParams } from "../../components/function";
import Footer from "../../components/foot/bookfoot.js"
@connect(
    state=>(
        {
        show:state.show,
        bookContent:state.bookContent
     }
    )
)
export default class Book extends Component{


      handleTouchStart = (e) => {
        this.startX = parseInt(e.touches[0].clientX);
        this.startY = parseInt(e.touches[0].clientY);
      }
      handleTouchEnd=(e)=>{
        this.endX = parseInt(e.changedTouches[0].pageX);
        this.endY = parseInt(e.changedTouches[0].pageY);

        if(this.endX-this.startX>=50){
            this.endY = parseInt(e.changedTouches[0].pageY);
            // this.handleTouchStart()
            // if(Math.abs(this.endY-this.startY)<100){
                this.add(-1)
            // }
        }else if(this.endX-this.startX<=-50){
            this.add(1)
        }
      }
    loading(){
        Toast.success('加载成功!!!', 0.5);
    }
    add(num){
        const {history,dispatch} = this.props;
        var id = getUrlParams().id;
        var section = getUrlParams().section*1+num;
        if(section!==0){
            Toast.loading("加载中",3);
            history.push("/app/book?id="+id+"&section="+section,this.loading);
            dispatch(book_content("/bookContent?id="+id+"&section="+section,this.loading));
        }else{
            Toast.success('已经到第一章了!!!', 1);
        }
    }
    componentDidUpdate(){
        this.fontSize = 18;
        this.bgColor="#ffffff";
        this.textColor = "#000000";
        if(localStorage.fontSize&&localStorage.bgColor&&localStorage.textColor){
            this.fontSize =localStorage.fontSize;
             this.bgColor=  localStorage.bgColor;
             this.textColor= localStorage.textColor;
        }else{
            localStorage.fontSize=this.fontSize;
            localStorage.bgColor = this.bgColor;
            localStorage.textColor = this.textColor;
        }
        document.getElementById("bookContent").style.fontSize=localStorage.fontSize*1+"px";
        document.getElementById("bookContent").style.color=localStorage.textColor;
        document.getElementById("body").style.backgroundColor=localStorage.bgColor;
        document.getElementById("bgColor").value = localStorage.bgColor;
        document.getElementById("color").value = localStorage.textColor
    }
    sub(cont){
        this.fontSize=this.fontSize*1+cont;
        localStorage.fontSize= this.fontSize;
        document.getElementById("bookContent").style.fontSize=localStorage.fontSize*1+cont+"px";
    }
    fontColor = () =>{
        this.textColor = document.getElementById("color").value;
        localStorage.textColor = this.textColor;
        document.getElementById("bookContent").style.color = this.textColor;
    }

    back(){
        const {history} = this.props;
        history.push("/app/home")
    }
    bglColor = () =>{
        this.bgColor = document.getElementById("bgColor").value;
        localStorage.bgColor = this.bgColor;
        document.getElementById("bgColor").value = localStorage.bgColor;
        document.getElementById("body").style.backgroundColor = this.bgColor;
    }
    componentWillMount(){
        Toast.loading("加载中",3);
        const {dispatch} =this.props;
        var id = getUrlParams().id;
        var section = getUrlParams().section;
        dispatch(book_content("/bookContent?id="+id+"&section="+section,this.loading));
    }

    render(){
        return(
            <div id="body">
                { this.props.bookContent.map((item,index)=>(
                <div key={index}>
                {this.props.show?<Head
                style={{ position:"fixed",top:0 }}
                show=""
                title={item.title}
                icon="ellipsis"
                history={this.props.history}/>:""}
                <WingBlank>
                <WhiteSpace size="lg"/>
                 <p
                 onTouchStart={this.handleTouchStart}
                 onTouchEnd={this.handleTouchEnd}
                  id="bookContent"
                  className="bookContent"
                  onClick={()=>this.props.dispatch(look_Book())}
                 >{item.content}</p>
                 <WhiteSpace size="lg" />
                 </WingBlank>

                 {this.props.show?<div className="bookFoot">
                <WingBlank>
                <WhiteSpace size="sm" />
                <Flex>
                    <Flex.Item><Button id="up" onClick={()=>this.add(-1)} type="primary" size="small">上一章</Button></Flex.Item>
                    <Flex.Item><Button id="up" onClick={()=>this.back()} type="primary" size="small">返回书城</Button></Flex.Item>
                    <Flex.Item><Button id="next" onClick={()=>this.add(+1)} type="primary" size="small">下一章</Button></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex className="adjust_flex">
                    <Flex.Item><input
                    id = "add"
                    type="button"
                    value="A+"
                    onClick={()=>this.sub(1)}
                    /></Flex.Item>
                    <Flex.Item>字体<input
                    id="color"
                    type="color"
                    onChange = {()=>this.fontColor()}
                    /></Flex.Item>
                    <Flex.Item>背景<input
                    id="bgColor"
                    type="color"
                    onChange = {()=>this.bglColor()}
                    /></Flex.Item>
                    <Flex.Item><input
                    id = "sub"
                    type="button"
                    value="A-"
                    onClick={()=>this.sub(-1)}
                    /></Flex.Item>
                </Flex>
                </WingBlank>
            </div>:""}
                 </div>
                )
            )
                }
            </div>
        )


    }




  
}