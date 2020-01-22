import React, { Component } from "react"

export default class Login extends Component{
constructor(){
    super();
    this.state = {
        userName : "",
        passWord: "",
    }
}

userNameChange=(sifter)=>{
    this.setState({userName: sifter})
}
passWordChange=(filter)=>{
    this.setState({passWord: filter})
}

Alert=()=>{
    alert ( `userName ${this.state.userName} passWord ${this.state.passWord}`)
}

render(){
    console.log(this.state.userName)
    return (
        <div>
            <input type="text" onChange = {e => this.userNameChange(e.target.value)}></input>
            <input type="text" onChange = {e => this.passWordChange(e.target.value)}></input>
            <button onClick= {this.Alert} >login</button>
        </div>


    )
}


} 