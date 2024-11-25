import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.config";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const checkbox = e.target.terms.checked;

    console.log(email, password, checkbox, name, photo);
    setErrorMessage("");
    setSuccess(false);

    if(!checkbox){
        setErrorMessage('Please accept our terms and conditions.');
        return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!regex.test(password)) {
      setErrorMessage(
        "you should give at least one uppercase, one lowercase, one number and one special character."
      );
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password should be 6 character");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);

        //sent verification email address
        sendEmailVerification(auth.currentUser)
        .then(()=> {
          console.log("verification email sent");
        })

        const profile = {
          displayName: name,
          photoURL: photo,
        }

        //update profile
        updateProfile(auth.currentUser, profile)
        .then(()=> {
          console.log("user profile updated");
        })
        .catch(error => {
          console.log("User profile updated error");
        })

        
      })
      .catch((error) => {
        // console.log(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  const handleShowPasswordStatus = (status) => {
    setShowPassword(status);
    console.log(status);
  };

  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <h3 className="text-3xl ml-4 font-bold">Sign Up now!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo url"
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
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          {/* Toggle button to show password or not */}
          <button
            onClick={() => handleShowPasswordStatus(!showPassword)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}{" "}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                defaultChecked
                className="checkbox checkbox-primary"
              />
              <span className="label-text">Remember me</span>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {success && <p className="text-green-500">Sign Up Successful.</p>}
      <p className="px-8 pb-3">Already have an account? <Link to='/login' className="text-blue-500">Please Login</Link></p>
    </div>
  );
};

export default SignUp;
