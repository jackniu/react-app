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
            },
            message: 'Message',
        }
        this.getMessage = this.getMessage.bind(this);
    }

    getMessage() {
        alert(this.state.message);
    }

    getTitle = () => {
        alert(this.state.title);
    }

    getData = () => {
        this.setState({
            title: 'New title'
        })
    }

    setTitle = (str) => {
        this.setState({
            title: str
        })
    }

    render() {
        return (
            <div className="home">
                <h2>{this.state.title}</h2>
                <button onClick={this.getMessage}>点击获取Message</button>
                <br /><br />
                <button onClick={this.getTitle}>点击获取Title</button>
                <br /><br />
                <button onClick={this.getData}>改变Title</button>
                <br /><br />
                <button onClick={this.setTitle.bind(this, 'Jack')}>传值Title</button>
            </div>
        )
    }
}

export default Home;