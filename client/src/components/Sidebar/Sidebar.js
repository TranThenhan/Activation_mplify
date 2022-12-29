import { MdManageAccounts } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import "./sidebar.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


const Sidebar = () => {
  const [sidebar1, setSidebar1] = useState(false);
  const [sidebar2, setSidebar2] = useState(false);
  const [sidebar3, setSidebar3] = useState(false);
  const [sidebar4, setSidebar4] = useState(false);
  const [sidebar5, setSidebar5] = useState(true);
  const [sidebar6, setSidebar6] = useState(false);
  const [sidebar7, setSidebar7] = useState(false);


  const handleSidebar1 = () => {
    setSidebar1(true)
    setSidebar2(false)
    setSidebar3(false)
    setSidebar4(false)
    setSidebar5(false)
    setSidebar6(false)
    setSidebar7(false)
  };
  const handleSidebar2 = () => {
    setSidebar1(false)
    setSidebar2(true)
    setSidebar3(false)
    setSidebar4(false)
    setSidebar5(false)
    setSidebar6(false)
    setSidebar7(false)
  };
  const handleSidebar3 = () => {
    setSidebar1(false)
    setSidebar2(false)
    setSidebar3(true)
    setSidebar4(false)
    setSidebar5(false)
    setSidebar6(false)
    setSidebar7(false)
  };
  const handleSidebar4 = () => {
    setSidebar1(false)
    setSidebar2(false)
    setSidebar3(true)
    setSidebar4(true)
    setSidebar5(false)
    setSidebar6(false)
    setSidebar7(false)
  };
  const handleSidebar5 = () => {
    setSidebar1(false)
    setSidebar2(false)
    setSidebar3(true)
    setSidebar4(false)
    setSidebar5(true)
    setSidebar6(false)
    setSidebar7(false)
  };
  const handleSidebar6 = () => {
    setSidebar1(false)
    setSidebar2(false)
    setSidebar3(true)
    setSidebar4(false)
    setSidebar5(false)
    setSidebar6(true)
    setSidebar7(false)
  };
  const handleSidebar7 = () => {
    setSidebar1(false)
    setSidebar2(false)
    setSidebar3(true)
    setSidebar4(false)
    setSidebar5(false)
    setSidebar6(false)
    setSidebar7(true)
  };

  const [open, setOpen] = useState(false)
  const { dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };
  
  return (

    <div className="sidebar">
      <div className="sidebar_menu ">
        <div className="sidebar_logo">
          <img src="./assets/img/logo_1.png" alt="logo" />
        </div>
        <ul>
          <li className="sidebar_title">
            <MdManageAccounts size={22} />
            Quản lý gian hàng
          </li>
          <li className="sidebar_title " >
            <HiOutlineClock size={22} />
            Báo cáo tổng hợp
          </li>
        <div className={open?"sidebar_item open":"sidebar_item  "}>
          <li className="sidebar_title setting " >
              <FiSettings size={22} />
            Cài đặt
              <i className={open?"bi-chevron-down toggle-btn  ":"bi-chevron-down dropdown  "}  onClick={() => setOpen(!open)} ></i>
            </li>
            <div className="sidebar_content" >
              <ul>
                <li className="sidebar_title ">Danh sách chiến dịch</li>
                <li className="sidebar_title ">Thông tin tài khoản</li>
                <li className="sidebar_title ">Đổi mật khẩu</li>
                <li className="sidebar_title ">Ngôn ngữ
                <i className="langue">Tiếng Việt</i></li>
                <li className="sidebar_title ">Liên hệ</li>
              </ul>
            </div>
          </div>
        </ul>
        <div className="sidebar_logout" onClick={handleClick}>
            <BiLogOut size={24} color ="#FF3132"/>
            Đăng xuất
          </div>
      </div>
    </div>
  );
};

export default Sidebar;