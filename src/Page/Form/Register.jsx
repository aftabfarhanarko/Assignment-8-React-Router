import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const { creatUser, profileUbdeat, emailVeryFi } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    const userData = {
      displayName,
      photoURL,
    };

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Account Creat Successfully");
        profileUbdeat(userData).then(() => {
          emailVeryFi().then(() => {
            toast.success("Your Email Verify Code Proviead");
          });
        });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-2 py-10">
      <title>Register From</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Register your account
          </h1>
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <div className="relative">
                <label className="label font-semibold ">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input pl-7  focus:outline-none  "
                  placeholder="enter your name"
                  required
                />
                <FaRegUser className=" absolute top-8.5 left-3 z-4 w-[14px] h-[11px]" />
              </div>

              {/* {erra && <p className="text-xs text-red-500">{erra}</p>} */}

              {/* Photo Url */}
              <label className="label font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input focus:outline-none"
                placeholder="photo url"
                required
              />

              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="email"
                required
              />
              {/* {era && <p className="text-xs text-red-500">{era}</p>} */}

              <div className="relative ">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input focus:outline-none"
                  placeholder="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-2  cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>

              {/* Remember me */}
              <label className="label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  defaultChecked
                  className="checkbox"
                />
                Remember me
              </label>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              {/* <p className="text-red-600">{er && er}</p> */}
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500 hover:underline" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
