import React ,{Component} from "react";
import { List, InputItem, Toast, WhiteSpace, WingBlank, Button, Flex } from 'antd-mobile';
import Head from "../../components/head";
import { code_register,register } from "../../actions";
import { connect } from "react-redux";



@connect(
    state=>(
        {
        obj:state.obj,
    }
    )
)
 export default class Register extends Component {
    loading(){
        Toast.success('加载成功!!!', 0.5);
    }
    code_register(){
        const {history,dispatch} = this.props;
        console.log(this.props)
        var username = document.getElementById("username").value.replace(/\s/g, '');
        console.log(this.verify)
        if(username&&this.verify){
            dispatch(code_register("/registerPhone?username="+username,this.loading))
        }else{
            Toast.offline(' 发送失败，请输入正确的手机号', 1.5);
        }

    }
    componentDidUpdate(){
        const {obj} =this.props;
        console.log(obj)
        if(obj.code){
            if(obj.code==2){
                Toast.success(obj.msg, 2)
            }else{
                Toast.success(obj.msg, 2)
            }
        }
        // console.log(this.props.state);
        this.hasError = false,
        this.username = "";
        this.password = "";
    }
//   onErrorClick = () => {
//     if (this.hasError) {
//       Toast.info('请输入11位手机号码');
//     }
//   }
  onChange = () => {
      console.log(this)
    let username = document.getElementById("username").value
    let phone = username.replace(/\s/g, '')
    let exp = /^1[3|4|5|8|9][0-9]\d{8}$/
    if (!exp.test(phone)) {
        this.verify=false
    } else {
        this.verify=true
    }
  }

  get_register(){
      const {dispatch,history} =this.props;
      console.log("username");
      console.log(username);
      let username = document.getElementById("username").value
     let code = document.getElementById("password").value;
    if(this.verify&&code){
        // dispatch(register("/register?username="+username+"&code="+code))
        Toast.offline("注册成功", 1.5)
        history.push("/login?username="+username)
    }else{
        if(!code){
            Toast.offline("验证码不能为空", 1.5)
        }else if(!username){
            Toast.offline("用户名不能为空", 1.5)
        }else{
            Toast.offline("用户名不正确", 1.5)
        }
    }
  }
  render() {
    return (
      <div style={{background:"#fff"}}>
        <Head
            style={{ position:"fixed",top:0 }}
            show=""
            title="注册"
            icon=""/>
        <WingBlank>
        <List renderHeader={() => 'Confirm when typing'}>
        <WhiteSpace size="lg" />
          <InputItem
            id = "username"
            type="phone"
            placeholder="请输入手机号码"
            onChange={()=>this.onChange()}
          >手机号码</InputItem>
           <WhiteSpace size="lg" />
            <Flex className="adjust_flex">
                <Flex.Item>
                    <InputItem
                        id = "password"
                        type="text"
                        placeholder="验证码"
                    >验证码</InputItem>
            </Flex.Item>
            <Flex.Item className = "verifyBtn">
                <Button className = "hintBtn" onClick={()=>this.code_register()} type="primary" size="small">获取验证码</Button>
            </Flex.Item>
            </Flex>
        </List>
        <WhiteSpace size="lg" />
        <Button onClick={()=>this.get_register()} type="primary" size="small">注册</Button>
        </WingBlank>
      </div>
    );
  }
}

