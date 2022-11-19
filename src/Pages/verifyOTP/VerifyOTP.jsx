import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, login, verifyOTP } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import Loader from "../../Components/SideBar/Loader/Loader";

const VarifyOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const { error, message, loading, success, user } = useSelector(
    (state) => state.verifyUser
  );

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success(message);
      navigate("/products");
      window.location.reload();
    }
  }, [dispatch, error, message, success, navigate]);

  const VerifyPhoneSubmit = (e) => {
    e.preventDefault();
    const phone = JSON.parse(localStorage.getItem("Uphone"));

    dispatch(verifyOTP(otp, phone));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="d-flex justify-content-center flex-column align-items-center w-100"
          style={{ height: "100vh" }}
        >
          <h2 className="mb-5">Varify your OTP</h2>
          <form action="" onSubmit={VerifyPhoneSubmit}>
            <div class="mb-2">
              <label for="exampleInputOTP" class="form-label">
                Enter your OTP
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputOTP"
                aria-describedby="OTPHelp"
                onChange={(e) => setOtp(e.target.value)}
              />
              <div id="OTPHelp" class="form-text">
                Do not share your OTP with anyone.
              </div>
            </div>
            <button type="submit" class="btn btn-success w-100 mt-3">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Verify
              </Link>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VarifyOTP;
