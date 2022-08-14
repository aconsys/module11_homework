const numPower = (x, n) => {
  if (x > 0 && n > 0 ) {
    let result = x;
  
    for(let i = 1; i <= n - 1; i++) {
    result *= x;
    }
    
    return result;
  } else {
    console.log('Заданы не натуральные числа');
  } 
};

console.log(numPower(9, 4));