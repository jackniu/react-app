import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: 'This is my name',
            user: {
                name: 'Jane',
                age: 20
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Name：{this.state.title}</h1>
                <p>{this.state.user.name}</p>
                <p>{this.state.user.age}</p>
            </div>
        )
    }
}

export default Home;