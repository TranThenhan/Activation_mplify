import Avatar from "../Avatar/Avatar";
import "./appbar.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


const Appbar = () => {
  const { user } = useContext(AuthContext);

  return (

    <div className="appbar">
        <div className="appbar_logo appbar_l">
          <p>Quản lý gian hàng</p>
        </div>
        {/* avatar */}
        <div className="appbar_avatar appbar_r">
          <Avatar />
          <div className="appbar_info">
          <p>{user.name}</p>
            <i>supervisor</i>
          </div>

        </div>
      </div>



  );
};

export default Appbar;