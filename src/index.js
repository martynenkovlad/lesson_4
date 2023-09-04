// Задание 1

let num = prompt("Введіть число:");
num = parseInt(num);

if (isNaN(num)) {
  console.log("Введене значення не є числом.");
} else if (num <= 1) {
  console.log(`Число ${num} не є простим числом.`);
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`Число ${num} є простим числом.`);
  } else {
    console.log(`Число ${num} не є простим числом.`);
  }
}