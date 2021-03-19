import React, { Component, PureComponent } from "react";

//PureComponent giong Component tuy nhien PureComponent se xet gia tri dau vao cua props co thay doi hay khong =>neu co moi render lai
//shouldComponentUpdate khong ton tai trong PureComponent (vi PureComponent da xu ly render tu dong tuong duong vos lifecycle nay)

export default class ChildComponent extends PureComponent {
  setInterval=[]
    constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps Child");
    return currentState;
  }
  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("shouldComponentUpdate child");
  //     return true;
  //   }
  render() {
    console.log("render roai");
    return (
      <div>
        <br />
        Props child:
        {this.props.stateNumber.number}
      </div>
    );
  }
  componentDidMount() {
    console.log("comDidmount child");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child");
    this.setInterval= setInterval(() => {
      console.log("object");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.setInterval);
  }
}
