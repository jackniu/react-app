import React, { Component } from 'react';

/*约束性和非约束性组件：
非约束性组件：<input type="text" defaultValue="a" /> 这个defaultValue其实就是默认的value，
    这样写出来的组件，其value就是用户输入的内容，React完全不管理输入的内容。
约束型组件：<input type="text" value={this.state.username} onChange={this.handleUsername} />
    这里value的值，是由this.handleUsername负责管理的，onChange事件触发之后，this.setState导致重新渲染。
*/
class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'jack'
        };
    }
    render() {
        return (
            <h1>表单</h1>
        );
    }
}

export default ReactForm;