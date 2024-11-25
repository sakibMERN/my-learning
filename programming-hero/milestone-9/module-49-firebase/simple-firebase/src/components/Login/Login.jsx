import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // console.log(result.user);
            setUser(result.user);
        })
        .catch((error)=> {
            // console.log("Error", error);
            setUser(null);
        })
        
    }

    const handleGitHubSignIn = () => {
        console.log('GITHUB sign in');
        signInWithPopup(auth, githubProvider)
        .then((result)=> {
            console.log(result.user.displayName);
            setUser(result.user);
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSingOut = ()=> {
        signOut(auth)
        .then(()=> {
            setUser(null);
            console.log("Sign out done")
        
        })
        .catch((error)=> {
            console.log('error', error)
            setUser(null)
        })
    }

    

    console.log(user);

    return (
        <div>
            
            

            {/* if user exist ? signout : signIn */}
            {/* {
                user === null ? (<button onClick={handleGoogleSingIn}>Login with Google</button>) : (<button onClick={handleSingOut}>Sign Out</button>)
            } */}
            {
                user ? (<button onClick={handleSingOut}>Sign Out</button>) 
                :
                 <>
                    <button onClick={handleGoogleSingIn}>Login with Google</button> 
                    <button onClick={handleGitHubSignIn}>Login with GitHub</button>
                 </>
            }

            {
                user && <div>
                    
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                
                </div>
            }
        </div>
    );
};

export default Login;