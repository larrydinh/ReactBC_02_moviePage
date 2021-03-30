import React from "react";

export default function Login() {
    const handleChange = () => {
        
    }
  return (
    <div className="container">
      <h3>Dang nhap</h3>
      <div className="form-group">
        <p>Tai Khoan</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Mat Khau</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
          <button type="submit">Dang nhap</button>
      </div>
    </div>
  );
}
