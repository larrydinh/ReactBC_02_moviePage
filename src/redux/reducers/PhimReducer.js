const stateDefault = {
  mangPhim: [],
  chiTietPhim: {
    tenPhim: "hahihi",
  },
};

export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM": {
      state.mangPhim = [...action.mangPhim];
      return { ...state };
    }
    case "LAY_CHI_TIET_PHIM": {
      state.chiTietPhim = action.chiTietPhim;
      console.log("action", action.chiTietPhim);
      return { ...state };
    }

    case "LAY_THONG_TIN_PHONG_VE": {
      state.thongTinPhongVe = action.thongTinPhongVe;
      console.log("action.thongTinPhongVe",action.thongTinPhongVe);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
