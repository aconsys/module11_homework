function outputNums(from, to) {
  let currentNum = from;
  
  let timerId = setInterval(function() {
    console.log(currentNum);
    if (currentNum === to) {
      clearInterval(timerId);
    }
    currentNum++;
  }, 1000);
}

outputNums(1, 60);