import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeAction } from "../../redux/actions/PhimActions";

export default function Checkout(props) {
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
  let { id } = props.match.params;

  useEffect(() => {
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  console.log("thongtinphongve", thongTinPhongVe);
  return <div></div>;
}
