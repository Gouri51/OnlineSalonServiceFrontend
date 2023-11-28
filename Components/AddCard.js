import { useState } from "react";
import cardService from "../service/CardService";

function AddCard() {

    const [newCard, setNewCard] = useState(
        {
           
            "cardName": "",
            "cardNumber": "",
            "cardExpiry": "",
            "bankName": ""
            
        }
    );

    const [msg, setMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setNewCard((oldValue) => ({ ...oldValue, [name]: value }));

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit");
        console.log(newCard);

        cardService.addCard(newCard)
            .then(
                (r) => {
                    console.log(r.data);
                    setMsg("Card Added .");
                    setErrMsg("");

                }
            )
            .catch(
                (e) => {
                    console.log(e);
                    setErrMsg("Failed to add Card . " + e.message);
                    setMsg("");
                }
            )
    }

    const cardElement = (
        <>
            {msg && <h3 className="alert alert-success">{msg}</h3>}
            {errMsg && <h3 className="alert alert-danger">{errMsg}</h3>}

            <form onSubmit={handleSubmit}>


            <input type="text" name="cardId" value={newCard.cardId} onChange={(e) => handleChange(e)} placeholder="Your cardId"  ></input><br />
                <input type="text" name="cardName" value={newCard.cardName} onChange={(e) => handleChange(e)} placeholder="Your cardName" required pattern="[A-Za-z]{3,}" title="card Name should be of min 3 chars, no special chars allowed." ></input><br />
                <input type="text" name="cardNumber" value={newCard.cardNumber} onChange={(e) => handleChange(e)} placeholder="Your cardNumber" required pattern="[0-9]{10}" title="card Number must be  10 digits." ></input><br />
                <input type="date" name="cardExpiry" value={newCard.cardExpiry} onChange={(e) => handleChange(e)} placeholder="Your cardExpiry" ></input><br />
                <input type="text" name="bankName" value={newCard.bankName} onChange={(e) => handleChange(e)} placeholder="Your bankName" required pattern="[A-Za-z]{3,}" title="bank Name should be of min 3 chars, no special chars allowed." ></input><br />
                

                <input type="submit"></input>
            </form>
        </>
    );

    return (
        cardElement

    );

}
export default AddCard;