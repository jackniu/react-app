import React from 'react';
import { directive } from '@babel/types';

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
            </div>
        )
    }
}

export default News;