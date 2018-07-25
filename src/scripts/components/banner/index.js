import React,{Component} from "react";
import { Carousel,WingBlank} from 'antd-mobile';

export default class Banner extends Component{
  
    state = {
            data: [
                require("../../../assets/images/banner1.jpg"),
                require("../../../assets/images/banner2.jpg"),
                require("../../../assets/images/banner3.jpg"),
                require("../../../assets/images/banner4.jpg"),
                require("../../../assets/images/banner5.jpg"),
            ],
            imgHeight: 176,
          }
          componentDidMount() {
            // simulate img loading
            
          }
    render(){
      const {history} =this.props;
        return(
            <Carousel
              autoplay={true}
              infinite
              // beforeChange={(from, to) => {
              //   // console.log(`slide from ${from} to ${to}`);
              //   // console.log(this.state.data.length)
              //   // console.log(to)
              //   // if(to==this.state.data.length-1){
              //   //         history.push("/app/")
              //   //       }
              //    } }
              // afterChange={
              //   index => console.log('slide to', index)
                
              // }
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href=""
                  style={{ display: 'inline-block', width: '100%', height: '20%' }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%',height:'20%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
        )
    }
}


