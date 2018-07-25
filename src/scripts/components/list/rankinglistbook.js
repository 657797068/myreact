import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import {Toast, WingBlank, WhiteSpace} from "antd-mobile";
import {connect} from "react-redux";
import { ranking_List } from "../../actions";

// const data = Array.from(new Array(11)).map((_val, i) => ({
//   icon: require("../../../assets/images/home.png"),
//   text: `name${i}`,
// }));

@connect(
    state=>(
        {
            rankingList:state.rankingList
        }
    )
)

export default class RankingListBook extends Component{

    loading(){
        Toast.success('加载成功!!!', 1);
    }
    componentWillMount(){
        Toast.loading("加载中",3);
        const {dispatch} =this.props;
        
        dispatch(ranking_List("/rankingList",this.loading))
    }
    render(){
        return(
            <div className="newBooks">
            <WhiteSpace size="lg" />
        {
            this.props.rankingList.map((item,index)=>(
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