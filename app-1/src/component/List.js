import React, { Component } from "react"


export default class List extends Component{
    constructor(){
        super()
        this.state = {
            list: ["sprite", " coke", "pepsi","mountain dew"]
        }
    }


render(){
let drinks = this.state.list.map(
    (el,idx)=>{return <h2 key={idx}>{el}</h2>}
)
    return (
        <div>
            {drinks}
        </div>
    )
}

}

