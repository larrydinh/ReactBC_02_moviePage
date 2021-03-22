import React, { Component } from "react";
import {connect} from "react-redux"
import axios from "axios";
import {layDanhSachPhimAction} from "../../redux/actions/PhimActions.js"
import { NavLink } from "react-router-dom";
class Home extends Component {
  //state danh sach phim
  // state = {
  //   arrFilms: [],
  // };

  loadFilm = () => {
    // Dung axios goi lay thong tin tu backend ve qua api
    // const promise = axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });
    // //Xu ly thanh cong
    // promise.then((result) => {
    //     console.log("result", result.data);
    //     // lay du lieu ve dispatch len reducer 
    //     this.props.dispatch({
    //       type: 'LAY_DANH_SACH_PHIM',
    //       mangPhim: result.data
    //     })
    //   this.setState({
    //     arrFilms: result.data,
    //   });
    // });
    // // Xu ly khi request loi
    // promise.catch((error) => {
    //   console.log("err", error.response.data);
    // });

    this.props.dispatch(layDanhSachPhimAction())
  };
  renderFilms = () => {
    return this.props.mangPhim.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-white bg-primary">
            <img
              className="card-img-top"
              src={film.hinhAnh}
              alt={film.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <NavLink className="btn btn-success" to={`detail/${film.maPhim}`}>DAT VE</NavLink>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> </h1>
        <button className="btn btn-primary" onClick={this.loadFilm}>Lấy danh sách film</button>
        <div className="display-4"><h1 className="text-center text-primary">Danh sach phim</h1></div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
  //Ham giong ham render cua react component ke thua nen co
  componentDidMount(){
      //Cac api muon goi sau khi giao dien render thi se goi ham nay
      this.loadFilm();
  }
}


  

 const mapStateToProps = (state) => {
  return {
    mangPhim: state.PhimReducer.mangPhim
  }
}
export default connect(mapStateToProps)(Home)
