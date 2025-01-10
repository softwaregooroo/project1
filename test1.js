// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Loop through the array using a for
// Loop through the array using a for...of loop (ES6+)
for (const number of numbers) {
  console.log(number);
}

// Loop through the array using a forEach loop
numbers.forEach(number => {
  console.log(number);
});

// Loop through the array using a while loop
let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}