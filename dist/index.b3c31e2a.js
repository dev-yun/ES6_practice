// 1. Truthy : 참 같은 값
// => Falsy가 아닌 나머지 모든 값
// 2. Falsy : 거짓 같은 값
// => null, false, "", NaN, undefined, 0, -0
// 3. 삼항 연산자 : 조건 ? 참 : 거짓 으로 구성된 조건문
const a = 3;
if (a >= 0) console.log("\uC591\uC218");
else console.log("\uC74C\uC218");
// 삼항 연산자로 표현하면
a >= 0 ? console.log("\uC591\uC218") : console.log("\uC74C\uC218");
// 삼항 연산자를 이용하여 truthy와 falsy를 판단 
let c = 1;
const result = c ? true : false;
console.log(result);
// 삼항 연산자를 이어 사용하는 방법 (4항 이상)
// 조건 ? 참 : 조건 ? 참 : 거짓
// 조건 ? 참 : 조건 ? 참 : 조건 ? 참 : 거짓 ... 
// 하지만 가독성이 떨어져 권장하진 않음
// 4. 단락 회로 평가 : 논리 연산자를 활용한 방법
// and 연산자 &&는 앞의 연산자가 false이면 뒤 연산자는 읽을 필요 없기 false
// or 연산자 ||는 앞의 연산자가 true이면 뒤 연산자는 볼 필요없이 true
const getName1 = (person)=>{
    if (!person) return "\uAC1D\uCCB4\uAC00 \uC544\uB2D9\uB2C8\uB2E4.";
    return person.name;
};
let person1 = {
    name: "\uAE40\uB098"
};
const name1 = getName1(person1);
console.log(name1);
// person1이 falsy일 경우 "객체가 아닙니다."
// truthy일 경우 person.name을 반환하는 코드인데 
// 단란 회로 평가를 이용하여 getName1을 더 간단하게 줄일 수 있다.
const getName2 = (person)=>{
    const name = person && person.name; // person이 falsy할때 false, truthy할때 person.name 반환 
    return name || "\uAC1D\uCCB4\uAC00 \uC544\uB2D9\uB2C8\uB2E4."; // name이 truthy할때 name값, falsy할때 "객체가 아닙니다" 반환 
};
let person2 = null;
const name3 = getName2(person2);
console.log(name3);
// 5. 조건문을 객체를 통해 간단히 구현
// 각 나라의 대표음식들을 return해주는 함수를 작성할때
const getFood = (representativFood)=>{
    if (representativFood === "\uD55C\uAD6D") return "\uBE44\uBE54\uBC25";
    if (representativFood === "\uC77C\uBCF8") return "\uCD08\uBC25";
    if (representativFood === "\uBBF8\uAD6D") return "\uC2A4\uD14C\uC774\uD06C";
    if (representativFood === "\uC911\uAD6D") return "\uB9C8\uB77C\uD0D5";
    if (representativFood === "\uBCA0\uD2B8\uB0A8") return "\uC300\uAD6D\uC218";
    return "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uC5C6\uB294 \uAD6D\uAC00\uC785\uB2C8\uB2E4.";
};
console.log(getFood("\uD55C\uAD6D"));
console.log(getFood("\uB7EC\uC2DC\uC544"));
// 위의 코드를 객체와 단락 회로 평가를 이용하면 더 간단하게 구현 가능
const nationFoods = {
    한국: "\uBE44\uBE54\uBC25",
    일본: "\uCD08\uBC25",
    미국: "\uC2A4\uD14C\uC774\uD06C",
    중국: "\uB9C8\uB77C\uD0D5",
    베트남: "\uC300\uAD6D\uC218"
};
const getNationFood = (representativFood)=>{
    return nationFoods[representativFood] || "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uC5C6\uB294 \uAD6D\uAC00\uC785\uB2C8\uB2E4.";
};
console.log(getNationFood("\uBBF8\uAD6D"));
console.log(getNationFood("\uC778\uB3C4"));
// 6. 비 구조화 할당 
var arr3 = [
    "one",
    "two",
    "three"
];
// 비구조화 할당 없이 변수에 할당
var one = arr3[0];
var two = arr3[1];
var three = arr3[2];
console.log(one, two, three);
// 비구조화 할당 사용
var [three, two, one] = arr3;
console.log(one, two, three);
// 비 구조화 할당을 더 간략하게 사용
var [one, two, three, four] = [
    "one",
    "two",
    "three",
    "four"
];
console.log(one, two, three, four);
// 비 구조화 할당을 사용하면 swap을 간단하게 구현 가능
var x = 10;
var y = 20;
// 비 구조화를 사용하지 않을 경우
var swap = x;
var x = y;
var y = swap;
console.log(x, y);
// 비 구조화를 사용할 경우
[x, y] = [
    y,
    x
];
console.log(x, y);
// 비 구조화 할당은 객체에도 이용 가능
var object1 = {
    one: "one",
    two: "two",
    three: "three"
};
var one = object1.one;
var two = object1.two;
var three = object1.three;
console.log(one, two, three);
// 비 구조화 사용시
var { one , two , three  } = object1;
console.log(one, two, three);
// 객체의 비 구조화 할당 사용시 key 값을 기준으로 할당 받아 변수명이 강제되는 경우가 있는데
// key : 임의의 변수명으로 정의하여 사용가능
var { one: numOne , two: twotwo , three: luckyNum  } = object1;
console.log(numOne, twotwo, luckyNum);
// 7. spread(스프레드)연산자 : 펼치는 연산자란 의미로 ...객체(배열) 형식
const cookie = {
    base: "cookie",
    madeIn: "korea"
};
const chocochipCookie = {
    base: "cookie",
    madeIn: "korea",
    toping: "chocochip"
};
const cheeseCookie = {
    base: "cookie",
    madeIn: "korea",
    toping: "cheese"
};
// 계속 base, madeIn 프로퍼티가 중복됨 => spread 연산자 사용
const chocochipCookie2 = {
    ...cookie,
    toping: "chocochip"
};
console.log(chocochipCookie);
console.log(chocochipCookie2);

//# sourceMappingURL=index.b3c31e2a.js.map
