import React, { Component } from 'react';
import '../assets/css/index.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: 'This is my title',
            user: {
                name: 'Jane',
                age: 20
            },
            style: {
                fontSize: '24px',
                color: 'green'
            }
        }
    }

    render() {
        return (
            <div className="home">
                <h1>Name：{this.state.title}</h1>
                <p>{this.state.user.name}</p>
                <p>{this.state.user.age}</p>
                <div className="red">test</div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
                <div style={{ color: 'gray' }}>灰色</div>
                <div style={this.state.style}>绿色</div>
                <img className="logo" src={require('../assets/images/logo.svg')} />
            </div>
        )
    }
}

export default Home;