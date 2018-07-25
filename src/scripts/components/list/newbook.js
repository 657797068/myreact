import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import {Toast, WhiteSpace, WingBlank} from "antd-mobile";
import {connect} from "react-redux";
import { new_Book } from "../../actions";

// const data = Array.from(new Array(11)).map((_val, i) => ({
//   icon: require("../../../assets/images/home.png"),
//   text: `name${i}`,
// }));

@connect(
    state=>(
        {
            newList:state.newList
        }
    )
)

export default class NewBook extends Component{

    loading(){
        Toast.success('加载成功!!!', 1);
    }
    componentWillMount(){
        Toast.loading("加载中",3);
        const {dispatch} =this.props;
        dispatch(new_Book("/newBook",this.loading))
    }
    render(){
        return(
            <div className="newBooks">
            <WhiteSpace size="lg" />
        {
            this.props.newList.map((item,index)=>(
                <div className="newBook_list" key={index}>
                <WingBlank size="md" className="newBook">
                    <NavLink to={"/app/detail?id="+item.id} >
                    <div><img src={item.images} alt="暂无图片"/></div>
                        <h3>{item.name}</h3>
                        <p>{item.author}</p>
                    </NavLink>
                    </WingBlank>
                </div>
            ))
        }
           </div>
        )
    }
}


// const NewBook = () => (
//   <div>
//     <Grid data={data} square={false} className="not-square-grid" />
//   </div>
// );

// export default NewBook;