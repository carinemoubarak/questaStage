import { useState } from "react";
import {addDoc,doc,getDocs,collection} from "firebase/firestore";
//import ReactModal from 'react-modal';
import {db} from "./connection";

function Signin(){
    const[username,setUsername]=useState("");
    const[pass,setPass]=useState("");
    const[pass2,setPass2]=useState("");
    const[popup,setPopup]=useState(false);
    const[error,setError]=useState("");
    const [users,setUsers]=useState([]);
    const usersCollectionRef=collection(db,"users");

    const signingup=async()=>{

        if(username==""|| pass=="" || pass2==""){
            setError("Please fill all the fields");
            setPopup(true);
        }
        else if(pass!==pass2){
            setError("The passwords did not match");
            setPopup(true);

        }
        else{

            const querySnapshot =await getDocs(usersCollectionRef);
            //setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))

            let found=false;
            querySnapshot .forEach((doc) => { //forEach, which waits for the snapshot to be fully loaded before running the loop
                if (doc.data().username === username) {
                found = true;
                }
            });

        // for (const user of users) {
        //     if(user.username==username) {
        //         found=true;
        //         break;
        //     }
        // }
          if(found){
            setError("Sorry, this username already exists");
            setPopup(true);
          }
          else{
            await addDoc(usersCollectionRef,{username:username,password:pass});
            window.location.replace('http://localhost:3000/signin');
          }
        }
    };

    const renderPopup = () => {
        if (popup) {
          return <div><h5 >{error}</h5></div>;
        }
      };

    return (
        <div>
            {renderPopup()}
            <h1>Sign Up Here</h1>
            <p>Username:</p>
            <input onChange={(event)=>{setUsername(event.target.value)}} placeholder="username" required/><br></br>
            <p>Password:</p>
            <input onChange={(event)=>{setPass(event.target.value)}} placeholder="password" type="password" required/>
            <br></br>
            <p>Confirm Password:</p>
            <input onChange={(event)=>{setPass2(event.target.value)}} placeholder="confirm password" type="password" required/>
            <br></br>
            <br></br>
            <button onClick={signingup}>Sign Up</button>
            <br></br>
            <br></br>
            <a href="http://localhost:3000/signin">Already have an account? click here to Sign In</a>

        
        </div>
    );


}

export default Signin;