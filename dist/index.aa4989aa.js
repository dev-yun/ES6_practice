// 1. forEach : 배열을 순회하는 간단한 내장함수
const array = [
    "a",
    "b",
    "c",
    "d"
];
array.forEach((param)=>console.log(param));
// 아래 for문과 같은 역할을 함
// for (let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }
// 또한 배열 메서드 (push, pop, shift 등을 사용할 수도 있음)
const newArray = [];
array.forEach((param)=>newArray.push(param + param));
console.log(newArray); // ['aa', 'bb', 'cc', 'dd']
// 2. map : 원본 배열을 순환하며 각각 모든 요소마다 콜백함수를 실행하고 return값을 반환
// foreach와 비슷하지만 return을 반환한다는 차이가 있음
const newArray2 = array.map((param)=>{
    return param + param + param;
});
console.log(newArray2); // ['aaa', 'bbb', 'ccc', 'ddd']
// 3. includes : 임의의 값이 주어진 배열에 존재하는지 판단
let str = "b";
console.log(array.includes(str));
// 4. indexOf : 임의의 값이 주어진 배열의 몇번째에 존재하는지 반환. (없으면 -1)
// indexOf가 첫번째값 즉, 0을 반환시 False처리가 되는 경우가 있어 이를 보완하기 위해 includes가 등장함
console.log(array.indexOf(str)); // 1
// 5. findIndex : 조건에 맞는 배열의 인덱스 번호를 반환
const arrObj = [
    {
        color: "red"
    },
    {
        color: "blue"
    },
    {
        color: "green"
    },
    {
        color: "pink"
    },
    {
        color: "blue"
    }
];
console.log(arrObj.findIndex((value)=>{
    return value.color === "pink";
}));
// 6. find : 조건에 맞는 배열의 요소를 반환
console.log(arrObj.find((value)=>{
    return value.color === "pink";
}));
// 7. filter : 조건에 따라 배열내에서 true를 반환하는 모든 요소 반환
console.log(arrObj.filter((value)=>value.color === "blue"));
// 8. slice : 조건에 맞게 배열의 요소를 자르는 메서드
console.log(arrObj.slice(0, 3));
// 9. concat : 두개의 배열을 합치는 메서드
console.log(array.concat(arrObj));
// 10. sort : 원본 배열의 순서를 사전순으로 정렬
const engs = [
    "d",
    "e",
    "a",
    "c",
    "b"
];
engs.sort();
console.log(engs); //['a', 'b', 'c', 'd', 'e']
// 하지만 숫자를 정렬할 시 숫자를 문자로 취급하여 1, 12, 2, 233, 3 처럼 정렬함 
const numbers = [
    3,
    124,
    23,
    5,
    46,
    345,
    32,
    12,
    3,
    41,
    24,
    2
];
// numbers.sort();
// console.log(numbers); //[12, 124, 2, 23, 24, 3, 3, 32, 345, 41, 46, 5]
// 때문에 비교함수를 만드는 사전 작업이 필요함
const compare = (num1, num2)=>{
    if (num1 > num2) // numb1 이 num2 보다 작으면 num1을 num2보다 뒤로 보냄
    return 1; // -1을 넣고 num1 < num2 일때 1을 넣으면 내림차숨
    if (num1 < num2) // numb1 이 num2 보다 크다면 num1을 num2보다 앞으로 보냄
    return -1;
    return 0;
};
numbers.sort(compare);
console.log(numbers); //[2, 3, 3, 5, 12, 23, 24, 32, 41, 46, 124, 345]
// 11. join : 배열의 값을 이어서 출력해주는 메서드
const strings = [
    "\uC548\uB155\uD558\uC138\uC694",
    "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8",
    "es6",
    "\uC774\uD6C4",
    "\uACF5\uBD80\uC911\uC785\uB2C8\uB2E4."
];
console.log(strings.join(" "));

//# sourceMappingURL=index.aa4989aa.js.map
