import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./authlayout.css";
import { useState } from "react";
import Forgot from "../../components/Forgot/Forgot";



const AuthLayout = () => {

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setForgot(false);
  };
  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
    setForgot(false);
  };
  const handleForgot = () => {
    setLogin(false);
    setRegister(false);
    setForgot(true);
  };

  return (
    <div className="authlayout">
      <div className="authlayout_l">

        {/* form */}
        {/* <Login /> */}
        {login && <Login />}
        {register && <Register />}
        {forgot && <Forgot />}      {/* actions */}
        <div className="authlayout_actions">
          <p className="p_action" onClick={login ? handleForgot : handleRegister} > {login ? "Bạn quên mật khẩu ?" : ""}</p>
          <p className="p_action" onClick={login ?handleRegister : handleLogin} >{login ? "Bạn chưa có tài khoản? Đăng ký ngay" : "Bạn đã có tài khoản? Đăng nhập ngay"}</p>
        </div>
      </div>
      <div className="authlayout_r">
        <img src="./assets/img/imglogin.png" alt="imglogin" />
      </div>
    </div>


  );
};

export default AuthLayout;