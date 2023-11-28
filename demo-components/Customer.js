import { useState } from "react";

function Customer(){

    const [customer,setCustomer]=useState(
        {
            "custName":"",
            "custEmail":"",
            "phone":""
        }
    );

    const heading = <h1> Customer Registration Page :</h1>;

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setCustomer((preValues)=>({...preValues,[name]:value}));

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        window.alert("you are submitting "+ JSON.stringify(customer));
    }

    const myCustomer = (
        <>
        {heading}
        
        <form onSubmit = {handleSubmit}>
            <input type="text" name = "custName" value={customer.custName} onChange={(event)=>handleChange(event)} placeholder="Your name" aria-autocomplete="off" /><br/>
            
            <input type="text" name = "custEmail" value={customer.custEmail} onChange={(event)=>handleChange(event)} placeholder="Your email" ></input><br/>

            <input type="text" name = "phone" value={customer.phone} onChange={(event)=>handleChange(event)} placeholder="phone number" ></input><br/>
            <input type = "submit" ></input>

        </form>
        </>
    );

    return myCustomer;
}
export default Customer;