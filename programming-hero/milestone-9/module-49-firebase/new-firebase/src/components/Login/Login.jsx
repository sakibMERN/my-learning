import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from "../../Firebase_init";


const Login = () => {
    const [user, setUser] = useState(null);

    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // console.log(result.user);
            setUser(result.user);
        })
        .catch((error) => {
            // console.log(error);
        })
    }
    const handleLoginWithGitHub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
 
    // console.log(user);
    return (
        <div className="mt-5">
            <button onClick={handleLogWithGoogle}>Login with google</button>
            <button onClick={handleLoginWithGitHub}>Login With GitHub</button>

            

            {
                user && <div>
                    <h2>Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;