import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);

  const location = useLocation();
  // console.log(location);
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => [alert(error.message)]);
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="font-bold text-center">Login your account</h1>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="mt-2 text-center text-accent">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-500">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
