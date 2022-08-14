function getNumber(num) {
  let a = 3;
    
  return function() {
   return num + a;
  }
}

const result = getNumber(11);

console.log(result());