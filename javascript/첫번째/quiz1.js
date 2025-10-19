// 데이터 예시 2 (동물)

// 문제
// 글자 수가 홀수인 동물만 뽑아내기.
// 이름에 "a"가 들어가는 동물만 대문자로 바꾸기.
// "g"로 시작하는 동물만 찾고 "!"를 뒤에 붙이기.
// "e"로 끝나는 동물만 뽑아내기.

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

const hol = animals.filter((x) => x.length % 2 === 1);
console.log(hol);
const big = animals.map((x) => (x.includes("a") ? x.toUpperCase() : x));
console.log(big);
const g = animals.map((x) => (x.startsWith("g") ? x + "!" : x));
console.log(g);
const e = animals.filter((x) => x.endsWith("e"));
console.log(e);
