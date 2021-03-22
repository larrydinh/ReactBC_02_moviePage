import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/PhimActions";

export default function Details(props) {
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
//   Tu goi API khi trang vua load 
  useEffect(() => {
      //Lay tham so tu url
      let {id} = props.match.params;
    //   Goi action truyen vao tu id phim 
      dispatch(layThongTinChiTietPhim(id))
  }, [])
  
  console.log("props", props);
  return (
    <div className="container">
      {/* {props.match.params.id} */}
      <div className="row mt-5">
        <div className="col-6">
          <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Ten phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mo ta</th>
                <th>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere ea aspernatur quisquam ipsa illum eos minima quam
                  commodi excepturi officiis neque ab adipisci non perferendis
                  veniam accusantium, impedit sed voluptatem? Voluptas pariatur
                  illum fugit ratione?
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
