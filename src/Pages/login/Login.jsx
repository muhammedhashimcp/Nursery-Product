import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import Loader from "../../Components/SideBar/Loader/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated, message } = useSelector(
    (state) => state.user
  );

  const [phone, setPhone] = useState("");
  console.log(phone, "---- phone");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(phone));
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
    if (isAuthenticated) {
      toast.success(message);
      navigate("/verifyotp");
    }
  }, [error, dispatch, isAuthenticated, message, navigate]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="d-flex justify-content-center flex-column align-items-center w-100"
          style={{ height: "100vh" }}
        >
          <h2 className="mb-5">Login</h2>
          <form action="" onSubmit={loginSubmit}>
            <div class="mb-2">
              <label for="exampleInputNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <div id="numberHelp" class="form-text">
                We'll never share your number with anyone.
              </div>
            </div>
            <button type="submit" class="btn btn-success w-100 mt-3">
              <Link to="" style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
