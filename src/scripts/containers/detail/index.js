import React , {Component} from "react";
import Head from "../../components/head"
import { WingBlank, WhiteSpace, Flex, Button,Toast } from "antd-mobile";
import { connect } from "react-redux";
import { get_book,put_Bookrack } from "../../actions";
import { getUrlParams } from "../../components/function";
@connect(
    state=>(
        {
        book:state.book,
        hint:state.hint
    }
    )
)
export default class Detail extends Component{
    lookBook=(id)=>{
        const {history} = this.props;
        history.push("/app/book?id="+id+"&section=1");
    }
    loading(){
        Toast.success('加载成功!!!', 1);
    }
    putBookrack(){
        const {dispatch,hint} = this.props;
        var username = localStorage.username;
        if(username){
            var id = getUrlParams().id;
            dispatch(put_Bookrack("/putBookrack?username="+username+"&id="+id))
        }else{
            Toast.offline("加入失败请登录后重试", 1.5) 
        }
    }
    componentDidUpdate(){
        const {hint} = this.props;
            Toast.success(hint.msg, 1);
    }
    componentWillMount(){
        Toast.loading("加载中",3);
        const {dispatch} =this.props;
        var id = getUrlParams().id;
        // var id = this.props.location.search.split("=")[1]
        dispatch(get_book("/detail?id="+id,this.loading))
    }
    render(){
        return(
            <div className="detail">
                <Head show="left" title="详情" icon="" history={this.props.history}/>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank >
                {
            this.props.book.map((item,index)=>(
                <div className="detail_top clear" key={index}>
                <WingBlank size="md">
                    <div className="top_left">
                        <img src={item.images} alt="暂无图片"/>
                    </div>
                    <div className="top_right">
                        <h3 >{item.name}</h3>
                        <WhiteSpace size="sm" />
                        <h4>作者：<span>{item.author}</span></h4>
                        <WhiteSpace size="sm" />
                        <h4>分类：<span>{item.type}</span></h4>
                        <WhiteSpace size="sm" />
                        <p><span>{item.wordcount}</span>万字</p>
                        <WhiteSpace size="sm" />
                        <div>评分：<span>{item.ratings}</span></div>
                    </div>
                    <WhiteSpace size="lg" />
                    <Flex >
                            <Flex.Item>
                            <Button type="warning" size="large" style={{ marginRight: '4px' }} onClick={()=>this.lookBook(item.id)}>开始阅读</Button>
                            <WhiteSpace size="lg" className="intro" />
                            </Flex.Item>
                            <Flex.Item>
                            <Button type="primary" size="large" style={{ marginRight: '4px' }} onClick={()=>this.putBookrack(item.id)}>放入书架</Button>
                            <WhiteSpace size="lg" className="intro" />
                            </Flex.Item>
                        </Flex>
                        <div className="intro_text">
                        <WhiteSpace size="lg" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.intro}
                        <WhiteSpace size="lg" className="intro" />
                        </div>
                        <div className="intro_class">
                        <h3>类别标签</h3>
                        <WhiteSpace size="lg" />
                        <span className="class_label">{item.type}</span>
                        <WhiteSpace size="lg" className="intro" />
                        </div>
                    </WingBlank>
                </div>
            ))
        }

                </WingBlank>
            </div>
        )
    }
}