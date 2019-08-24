import React, { Component } from 'react';
import { HashRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import Student from './HomeChilds/Student';
import Course from './HomeChilds/Course';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <NavLink to="/student">学生管理</NavLink>
                        <NavLink to="/course">课程管理</NavLink>
                    </div>
                    <div>
                        <Switch>
                            <Redirect exact from="/" to="/student"></Redirect>
                            <Route path="/student" component={Student}></Route>
                            <Route path="/course" component={Course}></Route>
                            {/* 动态路由 */}
                            <Route path="/sc/:test" component={Course}></Route>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
    }
}
