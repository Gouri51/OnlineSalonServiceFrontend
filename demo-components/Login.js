import { useState } from "react";

function Login(){

    const [name,setName]=useState("");

    const heading = <h1> Login here :</h1>;

    const handleChange = (event)=>{
        setName(event.target.value);
       

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        window.alert("you are submitting "+ name);
    }

    const myLogin = (
        <>
        {heading}
        {name}
        <form onSubmit = {handleSubmit}>
            <input type="text" value={name} onChange={(event)=>handleChange(event)} placeholder="Your name" /><br/>
            <input type="password"  ></input><br/>
            <input type = "submit" ></input>

        </form>
        </>
    );

    return myLogin;
}
export default Login;