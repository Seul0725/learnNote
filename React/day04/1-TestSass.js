import React, { Component } from 'react';
import './TestSass.scss';
class TestSass extends Component {
    render() {
        return (
            <div className="TestSass">
                <span>hello</span>
                <span>world</span>
                <p className="one">hello</p>
            </div>
        );
    }
}
export default TestSass;