import React,{Component} from "react";
import { SegmentedControl, Flex, Button, WhiteSpace, WingBlank} from 'antd-mobile';

// const $$id = function (id){
//     return document.getElementById(id)
// }
export default class App extends Component{

    state = {
        fontSize : "100",
        color:"#ffffff",
        bgColor:"#000000"
    }
   
    goBack=()=>{
        const {history} = this.props;
        console.log(this.props);
        history.goBack()
    }
    componentWillMount(){
        // setTimeout(function(){
        //     console.log(document.getElementById("add"))
        // },2000)
        // var $=;
        // var color=""
       
    }
    render(){
        return(
            <div className="bookFoot">
                <WingBlank>
                <WhiteSpace size="sm" />
                <Flex>
                    <Flex.Item><Button type="primary" size="small">上一章</Button></Flex.Item>
                    <Flex.Item><p></p></Flex.Item>
                    <Flex.Item><Button type="primary" size="small">下一章</Button></Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Flex className="adjust_flex">
                    <Flex.Item><input id = "add" type="button" value="A+"/></Flex.Item>
                    <Flex.Item>字体<input id="bgColor" type="color" value="#000000"/></Flex.Item>
                    <Flex.Item>背景<input id="color" type="color" value="#ffffff"/></Flex.Item>
                    <Flex.Item><input id = "sub" type="button" value="A-"/></Flex.Item>
                </Flex>
                </WingBlank>
            </div>
        )
    }
}