for (var i = 20; i <= 30; i += 0.5) {
  console.log(i);
  continue;
}

var uah = 27;

for (var dollars = 10; dollars <= 100; dollars += 10) {
  var cost = dollars * uah;
  console.log(dollars + " доларов " + "= " + cost + " гривен");
}

function num(N) {
  for (var i = 1; i <= 100; i++) {
    if (i * i <= N) {
      console.log(i);
    } else {
      break;
    }
  }
}

var N = 750;
num(N);
function num1(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var number = 29;
console.log(number + " простое число: " + num1(number));

function num2(num) {
  if (num < 1) {
    return false;
  }
  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
}

var number = 20;
console.log(number + num2(number));
