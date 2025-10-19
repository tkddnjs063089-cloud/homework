const vegetables = ["onion", "carrot", "potato", "cucumber", "tomato"];

// 1. 이름에 'o'가 들어간 야채만 고르기

// 2. 모든 야채 이름 앞에 "vege-" 붙이기

// 3. 글자 수가 6글자 이상인 야채만 고르기

const o = vegetables.filter((x) => x.includes("o"));
console.log(o);
const vege = vegetables.map((x) => "vege-" + x);
console.log(vege);
const six = vegetables.filter((x) => x.length >= 6);
console.log(six);
