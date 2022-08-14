const primeNumber = function(number) {
  let result;
  let dividerAmount = 0;
  
  if (number > 1000 || number === undefined) {
    result = 'Указаны неверные данные'
  } else if (number === 0 || number === 1 ) {
    result = 'не является ни простым, ни составным'
  } else {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        dividerAmount++;
      }  
    }
    
      if (dividerAmount === 2) {
        result = 'простое';
      } else {
      result = 'составное';
      }
  }
    
  console.log(`Число ${number} - ${result}`);
};

  primeNumber(41);