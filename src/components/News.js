import React from 'react';
import '../assets/css/index.css';
import demo_image from '../assets/images/demo.jpg'

class News extends React.Component {
    constructor(props) {
        super(props); /* props 用于父子组件传值 固定写法*/

        this.state = {
            list1: ['111', '222', '333'],
            list2: [<h3 key="1">test1</h3>, <h3 key="2">test2</h3>],
            list3: [
                { title: '新闻1' },
                { title: '新闻2' },
                { title: '新闻3' },
                { title: '新闻4' }
            ]
        }
    }
    render() {
        let mylist1 = this.state.list1.map(function (value, key) {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
                <ul>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                </ul>
                <div className="myimg"><img src={demo_image} alt="" />
                    <img src={require('../assets/images/demo.jpg')} alt="" />
                    <img src="https://tse1-mm.cn.bing.net/th?id=OET.4b3808faa5fc4b1ab6d9e10763ed67fd&w=272&h=272&c=7&rs=1&o=5&pid=1.9" alt="" />
                </div>
                <div>{this.state.list2}</div>
                <div>{this.state.list1}</div>
                <ul>{mylist1}</ul>
                <ul>
                    {
                        this.state.list3.map(function (value, key) {
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News;