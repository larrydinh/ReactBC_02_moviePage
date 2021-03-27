import axios from "axios";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    //Goi action loading open
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      // Sau khi lay du lieu tu api ve su dung ham dispatch cua redux thunk de dua du lieu len server
      dispatch({
        type: "LAY_DANH_SACH_PHIM",
        mangPhim: result.data,
      });

      //Tat dispatch
      dispatch({
        type: "closeLoading",
      });
    }, 1000);
  };
};

export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      //Sau khi lay du lieu tu api ta se dua du lieu len reducer = dispatch
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_PHONG_VE",
        thongTinPhongVe: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
