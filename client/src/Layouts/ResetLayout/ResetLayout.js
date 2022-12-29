import Reset from "../../components/Reset/Reset";
import "./resetlayout.css";

const ResetLayout = ({ history }) => {
    const handleClick = () => {
        history.push("/");
    };

    return (
        <div className="authlayout">
            <div className="authlayout_l">

                {/* form */}
                <Reset />
                {/* actions */}
                <p className="p_action" onClick={handleClick}>
                    Bạn muốn đăng nhập?
                </p>
            </div>
            <div className="authlayout_r">
                <img src="../../../assets/img/imglogin.png" alt="imgreset" />
            </div>
        </div>
    );
};

export default ResetLayout;