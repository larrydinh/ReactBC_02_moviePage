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
    }, 2000);
  };
};
