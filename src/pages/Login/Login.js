import React from "react";
import { useFormik, withFormik } from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from 'react-redux'
import { dangNhapAction } from "../../redux/actions/NguoiDungActions";


export default function Login(props) { 
  const dispatch = useDispatch();
  //cac props cua formik cung cap
  const { handleChange, handleSubmit,handleBlur, errors, touched , isValid } = useFormik({
    initialValues: {
      taiKhoan:'',
      matKhau:'',
    },
    validationSchema:yup.object().shape({
      taiKhoan:yup.string().required('tai khoan khong duoc bo trong!'),
      //.min(6,'tai khoan toi thieu 6 ky tu!'),
      matKhau: yup.string().required("mat khau khong duoc bo trong!"),
    }),
    onSubmit: values=>{ //values => this.state.values (react class component)
      // alert(JSON.stringify(values,null,2));  
      console.log(values);
      dispatch(dangNhapAction(values))
      //goi api hoac action de dua du lieu ve server
    }
  })  
  console.log(props,"props");
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Dang nhap</h3>
      <div className="form-group">
        <p>Tai Khoan</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange} onBlur={handleBlur}
        />
        {errors.taiKhoan && touched.taiKhoan ? <p className="text-danger">{errors.taiKhoan}</p>: null}
      </div>
      <div className="form-group">
        <p>Mat Khau</p>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange} onBlur={handleBlur}
        />
        {errors.matKhau && touched.matKhau ? <p className="text-danger">{errors.matKhau}</p>: null}
      </div>
      <div className="form-group">
        <button  type="submit" className="btn btn-success" disabled={!isValid} >Dang nhap</button>
      </div>
    </form>
  );
}
