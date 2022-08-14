function arrayAnalysis(array) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  
  array.map(function(item, index, array) {
    if(typeof(item) === 'number' && item % 2 === 0 && item !== 0 && !isNaN(item)) {
      evenCount++;
    }
    
    if(typeof(item) === 'number' && item % 2 !== 0 && !isNaN(item)) {
      oddCount++;
    }
    
    if(typeof(item) === 'number' && item === 0) {
      zeroCount++;
    }
  });
  
  console.log('Количество чётных: ' + evenCount);
  console.log('Количество нечётных: ' + oddCount);
  console.log('Количество нулей: ' + zeroCount);
}

let arr1 = [0, 1, 0, 2, 10, 15, 13, 14, 0, 1, 5, 20, 21, undefined, true, 0, 6, 5, NaN, null];//чётных - 5, нечётных - 7, нулей - 4
let arr2 = [0, '1', '0', '', 100, 2, 10, 15, 14, 0, 1, 5, 20, 21, undefined, true, 98, 0, 6, 5, NaN, null];//чётных - 7, нечётных - 5, нулей - 3

arrayAnalysis(arr1);

arrayAnalysis(arr2);