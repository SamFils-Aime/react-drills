import React,{Component} from "react"

export default class Filter extends Component {
    constructor() {
      super();
  
      this.state = {
        input: "",
        stuff: ["bug","cicadas","crabs"]
      };
    }
  
    handleChange(filter) {
      this.setState({ input: filter });
    }
  
    render() {
      let grossstuff = this.state.stuff
        .filter((el) => {
          return el.includes(this.state.input);
        })
        .map((el, idx) => {
          return <h2 key={idx}>{el}</h2>;
        });
  
      return (
        <div >
          <input onChange={e => this.handleChange(e.target.value)} type="text" />
          {grossstuff}
        </div>
      );
    }
  }