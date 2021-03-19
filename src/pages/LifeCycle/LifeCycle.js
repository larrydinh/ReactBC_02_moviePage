import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      stateNumber: {
        number: 1,
      },
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }
  // Chay sau khi state hoac props cua component thay doi va truoc render
  shouldComponentUpdate(newProps, newState) {
    //   Xu li  => return false giao dien khong render lai, return true: render
    return true;
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            // this.setState({
            //   number: this.state.number + 1,
            // });
            // let newStateNumber = this.state.stateNumber;
            let newStateNumber = {...this.state.stateNumber};

            newStateNumber.number += 1;
            this.setState({
              stateNumber: newStateNumber,
            });
          }}
        >
          ahihi{" "}
        </button>
        <h3>{this.state.stateNumber.number}</h3>
        {this.state.stateNumber.number<3? <ChildComponent stateNumber={this.state.stateNumber} />:'' }
       
      </div>
    );
  }
  // LifeCycle dung de goi API
  componentDidMount() {
    console.log("comDidmount");
  }
  //componentDidUpdate chay ke tu lan thay doi props hoac state
  componentDidUpdate(prevProps, prevState) {
    //Chay moi lan setState hoac props
    //Han che setState trong component nay (muon setState phai co dieu kien if)
    console.log("componentDidUpdate");
  }
}
