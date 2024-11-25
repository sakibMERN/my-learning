import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => { 

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log("currently logged user", currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('No user logged in!');
    //         setUser(null);
    //     }
    // })

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            console.log('current user: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> {
            unSubscribe();
        }
    }, [])

    

    console.log(user);

    const name = 'potato alu';

    const authInfo = {
        
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something (authInfo)
 * 4. attention please !!!!
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export all context
 */

