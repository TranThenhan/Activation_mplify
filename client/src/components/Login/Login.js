import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { isEmpty, isEmail } from "../helper/validate";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input/Input";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import GoogleLogin from "react-google-login";

const initialState = {
  name: "",
  password: "",
};

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(initialState);
  const { email, password } = data;
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const login = async (e) => {
    e.preventDefault();
    // check fields
    if (isEmpty(email) || isEmpty(password))
      return toast("Please fill in all fields.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    // check email
    if (!isEmail(email))
      return toast("Please enter a valid email addresss.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    try {
      await axios.post("/api/auth/signing", { email, password });
      localStorage.setItem("_appSignging", true);
      dispatch({ type: "SIGNING" });
    } catch (err) {
      toast(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  const googleSuccess = async (res) => {
    const token = res?.tokenId;
    try {
      await axios.post("/api/auth/google_signing", { tokenId: token });
      localStorage.setItem("_appSignging", true);
      dispatch({ type: "SIGNING" });
    } catch (err) {
      toast(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  const googleError = () => {
    toast("There was an error signing in, please try again later.", {
      className: "toast-failed",
      bodyClassName: "toast-failed",
    });
  };

  return (
    <>
    <div>
      <div>
        <h1>Đăng Nhập</h1>
        <p className="p_title" >Chào mừng bạn đến với <a href="https://activation.vn">Activation.vn</a>   <br></br>
          Đăng nhập để bắt đầu quản lý.</p>
      </div>
      <ToastContainer />
      <form className="login" onSubmit={login}>
        <Input type="email" text="Email"  name="email"
          handleChange={handleChange}/>
        <Input
          type={visible ? "text" : "password"}
          icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
          text="Mật khẩu"
          name="password"
          handleClick={handleClick}
          handleChange={handleChange}
        />
        <div className="login_btn">
          <button  type="submit">Đăng nhập</button>
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_G_CLIENT_ID}
              render={(renderProps) => (
                <button
                  className="btn-alt"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  sign in <FcGoogle />
                </button>
              )}
              cookiePolicy={"single_host_origin"}
              onSuccess={googleSuccess}
              onFailure={googleError}
            /> */}
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;