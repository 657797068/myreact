import React,{Component} from "react";
import Route,{Switch} from "react-router-dom"
import { NavBar,Icon} from 'antd-mobile';
export default class App extends Component{
    goBack=()=>{
        const {history} = this.props;
        console.log(this.props);
        history.goBack()
    }
 
    render(){
        const {show,show1,title,icon} = this.props;
        return(
            <div className="header" >
                 <NavBar
                 style={{backgroundColor:"#ddd"}}
                    mode="light"
                    icon={<Icon type={show} />}
                    onLeftClick={show?this.goBack:console.log()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type={icon} />,
                    ]}
                    >{title}</NavBar>
                    </div>
            
        )
    }
}