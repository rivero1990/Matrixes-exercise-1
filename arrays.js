const BEGINNIG = 1;
const END = 100;
const MAX_ROWS = Math.sqrt(END);
const COLUMNS = MAX_ROWS;


let currentNumber = BEGINNIG;
let arrayNumbers = [];

for (let i = 0; i < MAX_ROWS; i++) {
    arrayNumbers.push([]);
    for (let j = 0; j < COLUMNS; j++) {
        if (currentNumber <= END) {
            arrayNumbers[i].push(currentNumber);
            currentNumber++;
        }
    }
    if (currentNumber > END) {
       j=COLUMNS;
    }
}

console.table(arrayNumbers);



