const fruits = [
  "watermelon",
  "apple",
  "melon",
  "grape",
  "banana",
  "peach",
  "kiwi",
  "pineapple",
  "strawberry",
  "orange",
  "plum",
];

const animals = [
  "lion",
  "tiger",
  "elephant",
  "cat",
  "dog",
  "giraffe",
  "zebra",
  "monkey",
  "rabbit",
  "bear",
];

const vegetables = [
  "onion",
  "carrot",
  "potato",
  "cucumber",
  "tomato",
  "pepper",
  "lettuce",
  "broccoli",
  "spinach",
];

const result2 = vegetables
  .filter((x) => ["c", "p"].some((v) => x.includes(v) && x.length >= 7))
  .map((x) => "vege-" + x);

console.log(result2);

// const result1 = animals
//   .filter((x) => ["g", "r"].some((v) => x.includes(v)) && x.length >= 6)
//   .map((x) => x.toLowerCase());

// console.log(result1);

// const result = fruits
//   .filter((x) => ["i", "e"].some((v) => x.includes(v)) && x.length >= 5)
//   .map((x) => x.toUpperCase());
// console.log(result);

// 문제:
// 1. 이름 안에 "i" 또는 "e"가 들어가고,
// 2. 이름 길이가 4 이상인 과일만 골라내서
// 3. 모두 대문자로 바꿔라.
// const quiz1 = fruits
//   .filter((x) => ["i", "e"].some((v) => x.includes(v)) && x.length >= 6)
//   .map((v) => v.toUpperCase());
// console.log(quiz1);
