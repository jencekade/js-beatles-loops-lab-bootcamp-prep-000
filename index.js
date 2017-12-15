function theBeatlesPlay (arrayMusicians, arrayInstruements) {
  let array = [];
  for(let musicIndex= 0; musicIndex < arrayMusicians.length; musicIndex++) {
    array.push(`${arrayMusicians[musicIndex]} plays ${arrayInstruements[musicIndex]}.`);
  }
  return array;
}