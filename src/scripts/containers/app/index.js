
import React , {Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import Find from "../find";
import My from "../my";
import Home from "../home";
import BookRack from "../bookrack";
import Detail from "../detail";
import Book from "../book";
import Register from "../register";
import Login from "../login";
import ClassifyList from "../../components/classifyList";

export default class App extends Component {
    render(){
        return (
           <div>
                <Switch>
                <Route path="/app/home" component={Home} />
                <Route path="/app/login" component={Login} />
                <Route path="/app/register" component={Register} />
                <Route path="/app/bookrack" component={BookRack} />
                <Route path="/app/classifyList" component={ClassifyList} />
                <Route path="/app/find" component={Find} />
                <Route path="/app/my" component={My} />
                <Route path="/app/detail/:tab?" component={Detail}/>
                <Route path="/app/book/:tab?" component={Book} history={this.props.history} />
                <Route  render={
                        ()=>(<Redirect to="/app/home"/>)
                    }/>
                </Switch>
           </div>
        )
    }
}