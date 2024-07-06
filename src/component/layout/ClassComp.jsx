// import React, { Component } from "react";
import React from "react";
// first way
// class Classcomp extends Component{

// }
// second way
class Classcomp extends React.Component{
    constructor(props){
        super(props);
        console.log("hello class component");
        // document.write("hello")
        this.state={
            name:"harsh",
            age: 22
        }
    }

    changeName = () =>{
      this.setState({name:"kotak"})
    //   document.body.style.cssText = " color:red"
    }
  render(){
   return(
    <>
    <h1 className="text-center mt-3 text-primary bg-dark">hello Class Component </h1>
    <h2 className="text-danger display-4 ">{this.props.title}</h2>
    <h2>{this.state.name}</h2>
    <h2>{this.state.age}</h2>
    
    <button onClick={this.changeName} className="btn btn-primary "> Click and show Class Component</button>
    </>
   )
  }
}
export default Classcomp;