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
    }

    run = (event) => {
        console.log(event.target.getAttribute('myid'));
    }

    inputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            title: e.target.value
        })
    }

    getValue = (e) => {
        console.log(this.state.title);
    }

    render() {
        return (
            <div className="home">
                <h2>{this.state.title}</h2>
                <button myid='11' onClick={this.run}>点击获取Message</button>
                <br /><br />
                <input onChange={this.inputChange} /> <button onClick={this.getValue}>获取input的值</button>
            </div>
        )
    }
}

export default Home;