'use strict'
function randomNumbers() {
    let numbers = []
  
    const generateNumber=()=> {
        try{
      let randomNumber = Math.floor(Math.random() * 100) ;
  
      if (numbers.includes(randomNumber)) {
        return generateNumber();
      }
      numbers.push(randomNumber);
      return randomNumber;
      } catch{

      }
    }
      return generateNumber;}

  const random=randomNumbers();
  for (let i = 0; i <= 99; i++) {
  
  
  console.log(random()) };  
