function getNumber() {
  const arrayLength = 10;
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let number = Math.floor(Math.random() * 100);
    if (number !== randomArray.last) {
      randomArray.push(number);
    } else {
      return number;
    }
  }
  return randomArray;
}

let array1 = getNumber();

console.log(array1);
console.log(Math.min(...array1));
console.log(Math.max(...array1));