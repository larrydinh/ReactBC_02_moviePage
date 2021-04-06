import axios from "axios";
import { accessToken } from "../../pages/Config/setting";
import {history} from '../../App'
import { layThongTinPhongVeAction } from "./PhimActions";


//Dữ liệu backend cần
// {
//     "maLichChieu": 0,
//     "danhSachVe": [
//       {
//         "maGhe": 0,
//         "giaVe": 0
//       }
//     ],
//     "taiKhoanNguoiDung": "string"
//   }

export const datVeActions = (thongTinDatVe) => {
  console.log('thongTinDatVe',thongTinDatVe);
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
        method: "POST",
        data: thongTinDatVe,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      //200: call api thanh cong
      //201: Du lieu da duoc khoi tao 
      //400: du lieu yeu cau khong hop le
      //404: tim khong thay du lieu tren server
      //401: khong co quyen truy cap vao api
      //403: chua dc cap quyen truy cap vao api
      //500: loi xay ra tren server (backend sai hoac frontend sai)
      if (result.status === 200) {
        alert("dat ve thanh cong! ");
        console.log(thongTinDatVe);
        history.push(`/checkout/${thongTinDatVe.maLichChieu}`);
        //Goi lai action lay thong tin phong ve (da xay dung san)
        dispatch(layThongTinPhongVeAction(thongTinDatVe.maLichChieu))
      }
      console.log(result, "result ");
    } catch (errors) {
      console.log(errors);
    }
  };
};
