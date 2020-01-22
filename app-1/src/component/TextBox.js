import React,{Component} from "react"

class TextBox extends Component{
    constructor(){
        super();
        this.state= {
            message: "",
        }
    }
    handleMessage =(text) =>{
        this.setState({ message: text})
    }

    render() {
        return (
            <div>
                <p>
                {this.state.message}
                </p>
                <input onChange={(e) => this.handleMessage(e.target.value)}type="text" >
                </input>
            </div>
        )
    }

}

export default TextBox