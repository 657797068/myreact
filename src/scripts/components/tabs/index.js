import React,{Component} from "react";
import { Tabs, WhiteSpace, Badge, NoticeBar,NavLink } from 'antd-mobile';
import NewBook from "../list/newbook";
import HotBook from "../list/hotbook";
import RankingBook from "../list/rankinglistbook";



//   gotoBook(id){
//     const {history} =this.props;
//     history.push("/app/detail?id="+id)
//     }
export default class TabExample extends Component{
    gotoBook=(id)=>{
        const {history} = this.props;
        console.log(this.props);
        history.push("/app/detail?id="+id);
    }
    render(){
        const tabs1 = [
            { title: <Badge>热门小说</Badge> },
          ];
          const tabs2 = [
            { title: <Badge >排行榜</Badge> },
          ];
          const tabs3 = [
            { title: <Badge >新书抢先</Badge> },
          ];
          
        return(
            <div>
        <WhiteSpace size="lg" />
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }} onClick={()=>this.gotoBook(1)}>
        太始元年，有神石自太空飞来，分散落在人间，其中落在东土大陆的神石，上面镌刻着奇怪的图腾，人因观其图腾而悟道，后立国教。数千年后....《择天记》带给你不一样的奇幻征程。
        </NoticeBar>
    <div className="tabs_vacancy"></div>
    <Tabs tabs={tabs1} >
       <HotBook/>
    </Tabs>
    <div className="tabs_vacancy"></div>
    <Tabs tabs={tabs2} >
        <RankingBook/>
    </Tabs>
    <div className="tabs_vacancy"></div>
    <Tabs tabs={tabs3} >
       <NewBook/>
    </Tabs>
  </div>
        )
    }
  
        };
