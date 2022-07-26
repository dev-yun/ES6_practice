const array1 = [
    "\uB098",
    "\uB2E4",
    "\uB77C",
    "\uB9C8",
    "\uBC14"
];
// 배열에 요소 추가 방법
// 1. 가장 앞에 요소 추가 : unshift
array1.unshift("\uAC00");
console.log(array1); // ['가', '나', '다', '라', '마', '바']
// 2. 가장 뒤에 요소 추가 : push
array1.push("\uC0AC");
console.log(array1); // ['가', '나', '다', '라', '마', '바', '사']
// 배열에 요소 제거 방법
// 3. 첫번째 요소 제거 : shift
array1.shift();
console.log(array1); // ['나', '다', '라', '마', '바', '사']
// 4. 마지막 요소 제거 : pop
array1.pop();
console.log(array1); // ['나', '다', '라', '마', '바']
// 5. 중간 요소 제거 : splice(제거할 요소 위치 입력,제거할 요소부터 몇개를 지울지 입력(입력 안할시 시작지점부터 모두 삭제))
array1.splice(1, 1);
console.log(array1); // ['나', '라', '마', '바']
// 5.5 splice는 제거와 동시에 추가도 가능
array1.splice(1, 2, "\uBC14", "\uC0AC", "\uC544");
console.log(array1); // ['나', '바', '사', '아', '바']
// 추가한 값은 임의의 변수에 대입할 수 없지만, 제거한 값은 임의의 변수에 대입가능
let added = array1.unshift("\uAC00");
// 5가 출력되는데 array1의 length임
console.log(added); // 6
let removed = array1.shift();
// 삭제된 '가' 가 할당됨
console.log(removed); // 가
// 6. 배열에서 요소 검색 : includes  ==> true, false 반환
const search1 = array1.includes("\uC0AC");
console.log(search1); // true
const search2 = array1.includes("\uD558");
console.log(search2); // false
// 7. 배열에서 요소 검색 2 : indexOf, lastIndexOf  ==> 정확한 요소 위치 반환
// 중복된 값이 있을시 indexOf는 앞에서부터, lastIndexOf는 뒤에서부터 검색, 없는 값이면 -1 반환
const arrayIndex = array1.indexOf("\uBC14");
console.log(arrayIndex); // 1
const arrayIndex2 = array1.lastIndexOf("\uBC14");
console.log(arrayIndex2); // 4
const arrayIndex3 = array1.indexOf("\uD558");
console.log(arrayIndex3); // -1
// 배열의 특정 요소 모두 제거 방법
const arr = [
    "1",
    "3",
    "5",
    "3",
    "7",
    "9",
    "3",
    "3",
    "4",
    "3",
    "10"
];
while(true){
    let newIndex = arr.indexOf("3");
    if (newIndex === -1) break;
    arr.splice(newIndex, 1);
}
console.log(arr);
// 배열을 순회하는 방법 중 명령형 프로그래밍과 함수형 프로그래밍
// 명령형 프로그래밍
const arr1 = [];
for (const n of [
    1,
    2,
    3,
    4
])arr1.push(n * 2);
console.log(arr1);
// 함수형 프로그래밍
const arr2 = [
    1,
    2,
    3,
    4
].map((n1)=>n1 * 2).filter((n2)=>n2 % 2 !== 0).map((n3)=>`<li>${n3}</li>`);
console.log(arr2); // 명령형 코드를 함수형처럼 바꾸려면 배우 복잡한 과정을 거친다.
 // 하지만 함수형으로 작성하면 각각의 기능이 분리되고 가독성, 재사용성이 모두 뛰어나다.
 // 즉, 데이터가 복잡할수록 데이터를 다룰 수 있는 코드를 작은 로직으로 분리하고 이를 결합하여 조합하는 함수형 프로그래밍이 유리하다.  

//# sourceMappingURL=index.6ebee2fe.js.map
