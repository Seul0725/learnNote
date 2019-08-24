import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Link, Route, NavLink, Redirect } from 'react-router-dom';
import Index from './MyTabChild/1-Index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';
import './MyRoute.scss';
class MyRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    {/* <Link to="/">首页</Link>
                    <Link to="/student">学生管理</Link>
                    <Link to="/course">课程管理</Link>
                    <Link to="/room">教室管理</Link> */}
                    <NavLink exact activeClassName="navActive" to="/">首页</NavLink>
                    <NavLink activeClassName="navActive" to="/student">学生管理</NavLink>
                    <NavLink activeClassName="navActive" to="/course">课程管理</NavLink>
                    <NavLink activeClassName="navActive" to="/room">教室管理</NavLink>
                    <NavLink activeClassName="navActive" to="/teacher">教师管理</NavLink>
                </nav>
                {/* 展示的组件 */}
                <div>
                    <Switch>
                        {/*exact完全匹配，布尔值  */}
                        {/* <Redirect exact path="/student" component={Student} ></Redirect> */}
                        <Route exact path="/" component={Index}></Route>
                        <Route path="/student" component={Student}></Route>
                        <Route path="/course" component={Course}></Route>
                        <Route path="/room" component={Room}></Route>
                        <Route path="/teacher" render={() => {
                            return (
                                <div>hello</div>
                            );
                        }}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default MyRoute;