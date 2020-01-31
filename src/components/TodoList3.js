import React, { Component } from 'react';
import '../assets/css/index.css';

class TodoList3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname: '',
            list: [
                // {
                //     title: 'ionic',
                //     checked: true
                // },
                // {
                //     title: 'nodejs',
                //     checked: false
                // }
                // ,
                // {
                //     title: 'vue.js',
                //     checked: true
                // },
                // {
                //     title: 'React.js',
                //     checked: false
                // }
            ]
        };
    }
    addData = (e) => {
        if (e.keyCode === 13) {
            let title = this.refs.title.value;
            let tmp = this.state.list;
            tmp.push({
                title: title,
                checked: false
            });
            this.refs.title.value = '';
            this.setState({
                list: tmp
            })
            // console.log(tmp);
            //执行缓存数据
            localStorage.setItem('todolist', JSON.stringify(tmp));
        }
    }

    checkboxChange = (key) => {
        let tmp = this.state.list;
        tmp[key].checked = !tmp[key].checked;
        this.setState({
            list: tmp
        })
        // console.log(tmp);
        //执行缓存数据
        localStorage.setItem('todolist', JSON.stringify(tmp));
    }
    deleteData = (key) => {
        // console.log(key)
        let tmp = this.state.list;
        this.state.list.splice(key, 1);
        this.setState({
            list: tmp
        })
        //执行缓存数据
        localStorage.setItem('todolist', JSON.stringify(tmp));
    }

    // 页面加载就会触发
    componentDidMount() {
        // 获取缓存数据
        let todolist = JSON.parse(localStorage.getItem('todolist'));
        if (todolist) {
            this.setState({
                list: todolist
            })
        }
    }

    render() {
        return (
            <div className="todo">
                <header className="title">
                    Todolist: <input ref="title" onKeyUp={this.addData} />
                </header>
                <h2>待办事项</h2>
                <hr />
                <ul className="list">
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>{value.title}
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />
                                        <button onClick={this.deleteData.bind(this, key)}>删除</button></li>
                                )
                            }
                        })
                    }
                </ul>

                <h2>已完成事项</h2>
                <hr />
                <ul className="list">
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>{value.title}
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />
                                        <button onClick={this.deleteData.bind(this, key)}>删除</button></li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList3;