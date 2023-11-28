function Fruits() {
    const fruits = ["Banana", "Orange", "Apple"];

    const myFruitList = fruits.map(
        (fruit,index) => <p key={index}>{fruit}</p>

    );
    return (
        myFruitList
    );
}
export default Fruits;