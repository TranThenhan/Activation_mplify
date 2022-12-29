import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import ManageStore from "../../components/Manage_store/Manage_store";
import Profile from "../../components/Profile/Profile";

import ManageStore from "../../components/Manage_store/Manage_store";

import "./profilelayout.css";

const ProfileLayout = () => {

  return (
    <div className="profilelayout">

      <Sidebar />
      <div className="profilelayout_r">

        <div className="profilelayout_t">
          <Appbar />
        </div>
        <div className="profilelayout_b">

          {/* <ManageStore /> */}
          <Profile />
        </div>

      </div>

    </div>
  );
};

export default ProfileLayout;