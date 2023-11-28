import { useEffect, useState } from "react";
import cardService from "../service/CardService";



function DisplayAllCards() {

    const [allCards, setAllCards] = useState(
        [{
            "cardId": "",
            "cardName": "",
            "cardNumber": "",
            "cardExpiry": "",
            "bankName": ""
        }]
    );

    const [updateCard, setUpdateCard] = useState({
        "cardId":"",
        "cardName": "",
        "cardNumber": "",
        "cardExpiry": "",
        "bankName": ""
    });
    const [isUpdate, setIsUpdate] = useState(false);

    const [msg, setMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");


    useEffect(() => {
        //Runs only on the first render
        loadCardData();
    }, []);

    const loadCardData = () => {
        cardService.getAllCards()
            .then(
                (response) => {
                    console.log(response.data);
                    setAllCards(response.data);
                }
            )// call back for success response code
            .catch(
                (error) => {
                    console.log(error)
                }
            ) // call back for error response code

    }
    const handleDelete = (id) => {
        console.log("Delete:" + id);
        if (window.confirm("Are you sure to Delete Card?"))
            cardService.deleteCardById(id)
                .then(
                    (r) => {
                        console.log(r.data);
                        loadCardData();// after successful card delete, load all card data from back end 
                        setMsg("Card deleted.");
                        setErrMsg("");
                    }
                )
                .catch(
                    (err) => {
                        console.log(err.message);
                        setErrMsg("Card could not be deleted.");
                        setMsg("");
                    }
                );
    };

    const handleUpdate = (updateCard) => {
        console.log("handleUpdate");
        console.log(updateCard);
        setIsUpdate(true);
        setUpdateCard(updateCard);// assign to updateCard state

    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Update Submit");
        console.log(updateCard);

        cardService.updateCard(updateCard)
            .then(
                (r) => {
                    console.log(r.data);
                    setMsg("Card Updated .");
                    setErrMsg("");
                    loadCardData();// after successful card update, load all card data from back end 
                    setIsUpdate(false);


                }
            )
            .catch(
                (e) => {
                    console.log(e);
                    setErrMsg("Failed to update card . " + e.message);
                    setMsg("");
                }
            )
    }

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUpdateCard((oldValue) => ({ ...oldValue, [name]: value }));

    }

    const handleCancel = () => {
        setIsUpdate(false);
    }

    const updateCardElement = (
        <>
            <h3>Update card</h3>
            <form onSubmit={handleUpdateSubmit}>

               
            cardName:<br />
                <input type="text" name="cardName" value={updateCard.cardName} onChange={(event) => handleChange(event)} placeholder="Your cardName" ></input><br />
                cardNumber:<br />
                <input type="text" name="cardNumber" value={updateCard.cardNumber} onChange={(event) => handleChange(event)} placeholder="Your cardNumber" ></input><br />
                cardExpiry:<br />
                <input type="date" name="cardExpiry" value={updateCard.cardExpiry} onChange={(event) => handleChange(event)} placeholder="Your cardExpiry" ></input><br />
                bankName:<br />
                <input type="text" name="bankName" value={updateCard.bankName} onChange={(event) => handleChange(event)} placeholder="Your bankName" ></input><br />
                
                <input type="submit"></input>
                <input type="button" onClick={handleCancel} value="Cancel"></input>
            </form>

        </>
    );

    const allCardsElement = (
        <>
            <h3>Display all Cards.</h3>
            {msg && <h3 className="alert alert-success">{msg}</h3>}
            {errMsg && <h3 className="alert alert-danger">{errMsg}</h3>}

            {allCards.length === 0 && <h6>No card registered to display...</h6>}
            {allCards.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>cardName </th>
                            <th> cardNumber</th>
                            <th> cardExpiry</th>
                            <th> bankName</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCards.map(
                                (card) => {
                                    return (
                                        <tr key={card.cardId}>
                                            <td>{card.cardName}</td>
                                            <td>{card.cardNumber}</td>
                                            <td>{card. cardExpiry}</td>
                                            <td>{card.bankName}</td>
                                           

                                            <td> <input type="button" onClick={() => handleUpdate(card)} className="btn btn-info" value="Update"></input></td>

                                            <td> <input type="button" onClick={() => handleDelete(card.cardId)} className="btn btn-danger" value="delete"></input></td>

                                        </tr>);
                                }
                            )
                        }

                    </tbody>
                </table>
            }

        </>
    );


    return (
        isUpdate ? updateCardElement : allCardsElement
    );


}
export default DisplayAllCards;