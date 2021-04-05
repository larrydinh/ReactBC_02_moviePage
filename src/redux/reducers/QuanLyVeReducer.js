const stateDatVe = {
  danhSachGheDangDat: [
    // { maGhe: "01", giaVe: 0, stt: "01" },
    // { maGhe: "02", giaVe: 75000, stt: "02" },
  ],
};

export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      //Kiem tra ghe co trong mang danhSachGheDangDat => co xoa, khong thi them vao
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.ghe);
      }
      //Cap nhat lai state
      state.danhSachGheDangDat = [...state.danhSachGheDangDat];
      return { ...state };
    }
    case "resetChosen":{
      state.danhSachGheDangDat=[];
      return {...state}
    }
    default:
      return { ...state };
  }
};
