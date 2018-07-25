import React,{Component} from "react";
import { Carousel,WingBlank} from 'antd-mobile';

export default class Guide extends Component{
  
    state = {
            data: [
                require("../../../assets/images/1.jpg"),
                require("../../../assets/images/2.jpg"),
                require("../../../assets/images/3.jpg"),
                require("../../../assets/images/4.jpg"),
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
              beforeChange={(from, to) => {
                console.log(`slide from ${from} to ${to}`);
                console.log(this.state.data.length)
                console.log(to)
                if(to==this.state.data.length-1){
                        history.push("/app/")
                      }
                 } }
              afterChange={
                index => console.log('slide to', index)
                
              }
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href=""
                  style={{ display: 'inline-block', width: '100%', height: '100%' }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                      console.log(val)
                    }}
                  />
                </a>
              ))}
            </Carousel>
        )
    }
}


