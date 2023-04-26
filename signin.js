import { useState } from "react";
import {addDoc,doc,getDocs,collection} from "firebase/firestore";
import {db} from "./connection";

function Signin(){

    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const [users,setUsers]=useState([]);
    const[popup,setPopup]=useState(false);
    const usersCollectionRef=collection(db,"users");

    const signingin=async()=>{
        const data=await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))

        for (const user of users) {
            if(user.username==email && user.password==pass){
                window.location.replace('http://localhost:3000/homepage');
            }
          }

        setPopup(true);

    };

    const renderPopup = () => {
        if (popup) {
          return <div><h5 >Sorry, the username or password you entered is incorrect. Please try again.</h5></div>;
        }
      };

    return (
        <div>
            {renderPopup()}
            <h2>Sign In Here</h2>
            <p>Email:</p>
            <input onChange={(event)=>{setEmail(event.target.value)}} placeholder="email" type="email"/><br></br>
            <p>Password:</p>
            <input onChange={(event)=>{setPass(event.target.value)}} placeholder="password" type="password"/>
            <br></br>
            <br></br>
            <button onClick={signingin}>Sign In</button>
            <br></br>
            <br></br>
            
        </div>
    );

}

export default Signin;