import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeAction } from "../../redux/actions/PhimActions";
import "./Checkout.css";

export default function Checkout(props) {
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  const { danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const dispatch = useDispatch();
  let { id } = props.match.params;

  const renderGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
//Xac dinh ghe dang dat 
let indexGheDD = danhSachGheDangDat.findIndex(gheDD=>gheDD.maGhe===ghe.maGhe)
let classGheDangDat=  indexGheDD !==-1?'gheDangDat':'';
      //Xac dinh ghe da dat va chua dat
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}disabled={ghe.daDat} onClick={() => {dispatch({type:'DAT_GHE',
          ghe })
              
            }}
            onClick={() => {
              dispatch({
                type: "DAT_GHE",
                ghe,
              });
            }}
          >
            {ghe.daDat === true ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const renderGheDangDat = () => {
    return danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <Fragment>
          <span
            className="text-success font-weight-bold"
            style={{ fontSize: 23 }}
          >
            {gheDangDat.stt}
          </span>
        </Fragment>
      );
    });
  };

  const tinhTongTien = () => {
    return danhSachGheDangDat.reduce((TongTien, gheDangDat, index) => {
      return (TongTien += gheDangDat.giaVe);
    }, 0);
  };
  useEffect(() => {
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  console.log("thongtinphongve", thongTinPhongVe);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-center flex-wrap col-6">
          <img
            className="logo"
            src="https://tix.vn/app/assets/img/icons/screen.png"
            alt="https://tix.vn/app/assets/img/icons/screen.png"
          />
          {renderGhe()}
        </div>
        {/* ..... */}
        <div className="col-6 text-center">
          <div className="display-4 text-success">
            {tinhTongTien().toLocaleString()}
          </div>
          <img
            style={{ height: 200 }}
            src={thongTinPhongVe.thongTinPhim?.hinhAnh}
          ></img>
          <div>Dia chi:{thongTinPhongVe.thongTinPhim?.diaChi} </div>

          <div>
            Ngay gio chieu:{thongTinPhongVe.thongTinPhim?.ngayChieu},{" "}
            {thongTinPhongVe.thongTinPhim?.gioChieu}{" "}
          </div>
          <hr />
          <h3 className="text-warning text-left">
           Ghe da dat: {renderGheDangDat()}
          </h3>
          <div>
            <button className="w-100 btn btn-success display-4">Dat Ve</button>
          </div>
        </div>
      </div>
    </div>
  );
}
