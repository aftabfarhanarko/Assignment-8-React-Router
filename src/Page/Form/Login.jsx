import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const reaferncve = useRef(null);
  const [show, setShow] = useState(false);
  const { loginUser, user, passwordResetEmail, googleProvider } =
    useContext(AuthContext);
  const locations = useLocation();
  const nagvit = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("User Login Successfully");
        nagvit(`${locations.state ? locations.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handelForget = () => {
    const email = reaferncve.current?.value;
    passwordResetEmail(email)
      .then(() => {
        toast.success("Your Password Reset Email Provied Now");
      })
      .catch(() => {
        toast.error("Error Now");
      });
  };

  const handelGoogle = () => {
    googleProvider().then(() => {
      nagvit(`${locations.state ? locations.state : "/"}`);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-2">
      <title>Login From</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Login your account
          </h1>

          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                ref={reaferncve}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <div className="relative">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-2 cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>

              {/* Forgot password */}
              <div>
                <button
                  type="button"
                  onClick={handelForget}
                  className="link link-hover"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {/* <p className="text-red-600">{er && er}</p> */}

              {/* Submit */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-whit text-white mt-4 w-full"
              >
                Login
              </button>
              <button
                onClick={handelGoogle}
                type="button"
                className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-white "
              >
                <FcGoogle />
                Login with Gioogle
              </button>

              {/* Register link */}
              <p className="font-semibold text-center mt-2">
                Don’t Have An Account?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/auth/rigister"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
