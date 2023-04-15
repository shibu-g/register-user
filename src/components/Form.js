import React ,{useState} from "react";
import App from "../App.css";
function Form (){
 let [name,setname]=new useState("");
 let [email,setemail]=new useState("");
 let [password,setpassword]=new useState("");
 let [confirmpass,setconfirmpass]=new useState("");
 let [error,seterror]=new useState({message:"",color:""});
 function formsubmit(e){
    e.preventDefault();
    let data={
        username:name,
        useremail:email,
        userpass:password,
    confirm:confirmpass
     }
   if(data.name!="" && data.email!="" && data.password!="" && data.confirm!="" && data.userpass===data.confirm){
    //  alert("Your Details are Verified and Added SuccessFull")
      seterror({message:"Successfully Signed Up!",color:"green"});
    }else{
         seterror({message:"Error : All the fields are mandatory",color:"red"})
        // alert("Please Enter Currect Data");
   }
    }
    return (
    <div >
        <form className="hi">
            <div className="text">Signup</div>
            <div>
            <input placeholder="Full Name" type="text" onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div>
            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div>
            <input placeholder="Password" type="password" onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <div>
            <input placeholder="Confirm Password" type="password" onChange={(e)=>setconfirmpass(e.target.value)}></input>
            </div>
            <div className={`error ${error.color}`} >{error.message}</div>
            <div>
                <button type="submit" onClick={formsubmit}>SignUp</button>
            </div>
        </form>
    </div>
    );
}
export default Form;