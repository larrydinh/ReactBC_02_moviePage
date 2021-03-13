import React, { Component } from "react";

export default class Register extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    // Xu ly lay du lieu tren value
    let newValues = { ...this.state.values };
    newValues[name] = value;
    // Xu ly lay du lieu tren errors
    let newErrors = { ...this.state.errors };
    let errors = "";
    if (value === "") {
      newErrors[name] = name + " khong dc bo trong !";
    } else {
      newErrors[name] = errors;
    }
    this.setState({
      values: newValues,
      errors: newErrors,
    });
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   // do la ham asynchronous nen phai bo clg vao ham de load dung gia tri hien tai
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };
  handleSubmit = (event) => {
    //Chan su kien reload cua browser
    event.preventDefault();
    let valid = true;
    // Loi khi valid khong hop le
    // Khi bat ki thuoc tinh nao cua errors != '' => bi loi
    for (let keyError in this.state.errors) {
      if (this.state.errors[keyError] !== "") {
        valid = false;
      }
    }

    // Hoac + bat ki thuoc tinh nao cua value = ''
    for (let keyValue in this.state.values) {
      if (this.state.values[keyValue] === "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Du lieu ko hop le");
      return;
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="display-4">Dang ky</div>
        <div className="form-group">
          <p>Tai khoan</p>
          <input
            name="taiKhoan"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.errors.taiKhoan}</p>
        </div>
        <div className="form-group">
          <p>Ho Ten</p>
          <input
            name="hoTen"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.errors.hoTen}</p>
        </div>
        <div className="form-group">
          <p>Mat Khau</p>
          <input
            name="matKhau"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.errors.matKhau}</p>
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            name="email"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.errors.email}</p>
        </div>
        <div className="form-group">
          <p>So phone</p>
          <input
            name="soDienThoai"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.errors.soDienThoai}</p>
        </div>
        <div className="form-group">
          <button className="btn btn-success">Dang ky</button>
        </div>
      </form>
    );
  }
}
