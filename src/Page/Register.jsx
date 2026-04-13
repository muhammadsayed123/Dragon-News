import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser,setUser}=use(AuthContext)
  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log({name,photo,email,password})

    createUser(email,password)
    .then(res=>{
      // console.log(res.user)
      setUser(res.user)
    })
    .catch(error=>{
      console.log(error.message)
      alert(error.message)
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="font-bold text-center">Register your account</h1>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {/* photo */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {/* term and condition */}
            <div>
              <a className="link link-hover">Accept term and condition</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="mt-2 text-center text-accent">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-red-500">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
