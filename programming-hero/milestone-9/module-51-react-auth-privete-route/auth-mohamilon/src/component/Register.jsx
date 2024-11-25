import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const navigate = useNavigate();
    const {createUser, signInWithGoogle} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
          console.log(result.user.email);
          e.target.reset();
          navigate('/');
        })
        .catch(error => {
          console.log(error.message);
        })    
    }

    const handleSignWithGoogle = () => {
      signInWithGoogle()
      .then(result => {
        console.log("Google User ", result.user);
        navigate('/');
      })
      .catch(error => {
        console.log('Google sign in error: ', error);
      })
      
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="mx-4 mb-4">
            Already have an account? {" "}
            <Link className="text-blue-500 underline" to="/login">
              Login Now!
            </Link>
          </p>
          <p>
            <button onClick={handleSignWithGoogle} className="btn max-w-full m-3 btn-secondary mx-auto">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
