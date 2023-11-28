function Destructuring(){
  
    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
      }

     

      

      
      const myVehicle = ({type, color, brand, model}) => {
          const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'
          
        return (message);
        }
    


    return (myVehicle(vehicleOne));
}

export default Destructuring;