function theBeatlesPlay (arrayMusicians, arrayInstruements) {
  let array = [];
  for(let musicIndex= 0; musicIndex < arrayMusicians.length; musicIndex++) {
    array.push(`${arrayMusicians[musicIndex]} plays ${arrayInstruements[musicIndex]}.`);
  }
  return array;
}

function johnLennonFacts (array) {
  let n = array.length;
  while (n > 0){
    array[n-1] = array[n-1]
  }
  return array;
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push(`I love the Beatles!`);
    num++
  } while (n<15);
  return array;
}
