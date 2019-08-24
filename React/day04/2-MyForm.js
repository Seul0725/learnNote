import React, { Component } from 'react';
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: [{
                value: 'swimming',
                name: '游泳'
            }, {
                value: 'dancing',
                name: '跳舞'
            }, {
                value: 'singing',
                name: '唱歌'
            }, {
                value: 'eating',
                name: '吃'
            }],
            form: {
                // 用户选中的复选框中的数据
                hobbies: ['swimming', 'eating']
            }
        }
    }
    changeHandle = (e) => {
        let value = e.target.value;
        let hobbies = this.state.form.hobbies;
        if (hobbies.includes(value)) {
            // let index = hobbies.indexOf(value);
            // hobbies.splice(index, 1);
            hobbies = hobbies.filter((item) => {
                return item != value;
            })
        } else {
            // hobbies.push(value);
            hobbies = hobbies.concat([value]);
        }
        this.setState({
            form: {
                ...this.state.form, hobbies: hobbies
            }
        })
    }
    shouldComponentUpdate() {
        return true;
    }

    render() {
        const { form } = this.state;
        return (
            <div className="MyForm">
                <form action="">
                    爱好：
                    {
                        this.state.hobby.map((item, index) => {
                            return (
                                <label htmlFor={item.value} key={index}>
                                    <input id={item.value} type="checkbox" value={item.value} checked={form.hobbies.includes(item.value)} onChange={this.changeHandle} />{item.name}
                                </label>
                            );
                        })
                    }
                </form>
            </div>
        );
    }
}
export default MyForm;