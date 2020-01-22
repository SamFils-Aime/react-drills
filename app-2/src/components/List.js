import React, { Component } from 'react'
import ToDo from './ToDo'

export default class List extends Component {
    render (){
        
        let List= this.props.tasks.map((el,idx)=>{return <ToDo key={idx} task={el}/>});
        
        return <div>{List}</div>
    }
}

