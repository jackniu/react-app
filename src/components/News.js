import React from 'react';
import '../assets/css/index.css';
import demo_image from '../assets/images/demo.jpg'

class News extends React.Component {
    constructor(props) {
        super(props); /* props 用于父子组件传值 固定写法*/
    }
    render() {
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
                <div></div>
            </div>
        )
    }
}

export default News;