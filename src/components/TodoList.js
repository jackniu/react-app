import React, { Component } from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname: '',
            list: []
        };
    }
    addData = () => {
        let tmp = this.state.list;
        tmp.push(this.refs.listname.value);
        this.refs.listname.value = '';
        this.setState({
            list: tmp
        })
        // console.log(tmp);
    }
    deleteData = (key) => {
        // console.log(key)
        let tmp = this.state.list;
        this.state.list.splice(key, 1);
        this.setState({
            list: tmp
        })
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input ref="listname" />
                <button onClick={this.addData}>增加</button>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>{value} <button onClick={this.deleteData.bind(this, key)}>删除</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todolist;