import React, { Component } from 'react';
import Index from './MyTabChild/1-Index';
import Student from './MyTabChild/2-Student';
import Course from './MyTabChild/3-Course';
import Room from './MyTabChild/4-Room';
// let CurrentCom = Index;
class MyTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentCom: Index
        }
    }

    changeTab = (component) => {
        this.setState({
            CurrentCom: component
        })
    }
    render() {
        //CurrentCom就是某个组件
        let { CurrentCom } = this.state;
        return (
            <div>
                <nav>
                    <button onClick={this.changeTab.bind(this, Index)}>首页</button>
                    <button onClick={this.changeTab.bind(this, Student)}>学生管理</button>
                    <button onClick={this.changeTab.bind(this, Course)}>课程管理</button>
                    <button onClick={this.changeTab.bind(this, Room)}>教室管理</button>
                </nav>
                <div>
                    <CurrentCom />
                </div>
            </div>
        );
    }
}
export default MyTab;