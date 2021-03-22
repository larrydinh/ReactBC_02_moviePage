import React, { useState, useEffect } from "react";
import axios from "axios";
//Lam trang chu tuong tu class Home tuy nhien lam = function component
export default function UseEffectHome() {
  const [arrPhim, setArrPhim] = useState([]);
  //   Tao ra state cho mang phim => load ra trang chu
  let renderPhim = () => {
    return arrPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.tenPhim}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">Dat ve</p>
            </div>
          </div>
        </div>
      );
    });
  };

  //useEffect phai dat truoc return
  // Nhan vao 2 tham so:
  // +Tham so 1: la ham chay sau khi component render
  //Tham so 2: chua stay khi nao state thay doi thi tham so 1 se chay
  //Ghi chu: 1 component co the goi nhieu useEffect 
    useEffect(() => {
      layDanhSachPhim();
    }, []);

  const layDanhSachPhim = async () => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      setArrPhim(result.data);
      console.log(result.data);
    } catch (errors) {
      console.log("errors", errors);
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={() => {
          layDanhSachPhim()
      }} className="btn btn-primary">
        Get movie list
      </button>
      <div className="display-4 text-center">Danh sach film</div>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
