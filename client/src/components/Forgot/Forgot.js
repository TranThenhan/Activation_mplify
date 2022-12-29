import Input from "../Input/Input";
import { isEmpty, isEmail } from "../helper/validate";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setEmail({ email: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check fields
    if (isEmpty(email))
      return toast("Please fill in all fields.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    // check email
    if (!isEmail(email))
      return toast("Please enter a valid email address.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    try {
      await axios.post("/api/auth/forgot_pass", { email });
      handleReset();
      return toast("Please check your email 📧", {
        className: "toast-success",
        bodyClassName: "toast-success",
      });
    } catch (err) {
      toast(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  return (
    <>
    <ToastContainer />
    <div>
        <div>
          <h1>Quên mật khẩu </h1>
          <p className="p_title" ><a href="https://activation.vn">Activation.vn</a> sẽ gửi mã xác minh đến địa chỉ email của bạn   </p>
        </div>
    <form onSubmit={handleSubmit}>
      <Input type="text" text="Email" name="Email" handleChange={handleChange} />
      <div className="login_btn">
        <button type="submit">send</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default Forgot;