import React, { useState, useEffect } from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {layDanhSachPhimAction} from "../../redux/actions/PhimActions"
export default function ReduxHookHome(props) {

    //useSelector la hook de lay du lieu tu reducer ve 
const mangPhim = useSelector(state =>state.PhimReducer.mangPhim)
//useDispatch tuong tu this.props.dispatch
const dispatch = useDispatch();


  let renderPhim = () => {
    return mangPhim.map((phim, index) => {
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
// anfn 
useEffect(() => {
dispatch(layDanhSachPhimAction())
},[])

  return (
    <div className="container mt-5">
      <button onClick={() => {}} className="btn btn-primary">
        Get movie list
      </button>
      <div className="display-4 text-center">Danh sach film</div>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     mangPhim: state.PhimReducer.mangPhim,
//   };
// };

// export default connect(mapStateToProps)(ReduxHookHome);
