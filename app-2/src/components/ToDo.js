import React, { Component } from 'react'


export default class TodoList extends Component {

   
    render() {
        return (
            <div>
                {this.props.task}
            </div>
        )
    }
}


