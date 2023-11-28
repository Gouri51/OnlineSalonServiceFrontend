import http from './http-common'
class CardService {
    getAllCards() {

        return http.get("cards");
    }
    addCard(newCard){
        return http.post("card",newCard);
    }
    deleteCardById(id){
        return http.delete("card/"+id);
    }
    updateCard(updateCard){
        return http.put("card",updateCard);
    }
}
export default new CardService();