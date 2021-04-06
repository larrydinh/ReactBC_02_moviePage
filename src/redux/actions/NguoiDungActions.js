import axios from "axios"
import { accessToken,domain,taiKhoan } from "../../pages/Config/setting";
import {history} from '../../App'
export const dangNhapAction = (nguoiDung) => {
    return async (dispatch)=>{
        try{
            const result =await axios ({
                url:`${domain}/api/QuanLyNguoiDung/DangNhap`,
                method: 'post',
                data:nguoiDung
            })
            //lay gia tri api gui ve luu vao localstorage
            console.log('result',result);
            localStorage.setItem(accessToken,result.data.accessToken);
            localStorage.setItem(taiKhoan,JSON.stringify(result.data));
            // Dang nhap thanh cong chuyen huong ve home 
            history.push('/');
            // history.push nhận vào pathname => di chuyển đến trang component tương ứng 
        }
        catch(errors){
            console.log(errors, 'errors');
        }
    }
}