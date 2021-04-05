import { taiKhoan } from "../../pages/Config/setting";

let taiKhoanNguoiDung = "";

if (localStorage.getItem(taiKhoan)) {
  //kiem tra taiKhoan co trong store khong => co thi lay lam gia tri mac dinh cho state
  let taiKhoanNguoiDungStore = localStorage.getItem(taiKhoan);
  taiKhoanNguoiDung = JSON.parse(taiKhoanNguoiDungStore).taiKhoan;
}
const stateDefault = {
  taiKhoan: "",
};
export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
