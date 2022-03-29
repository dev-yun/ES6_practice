// 객체 생성 방법 : 1. 생성자 함수, 2. 객체 리터럴

// 1. 생성자 함수 : const 변수 = new Object 형식으로 만듬
const object = new Object;

// 2. 객체 리터럴 : 관계가 있는 요소들을 (속성 이름 : 속성 값)으로 묶어 표현한 것
// 속성명은 숫자가 제일 앞이거나, 공백이 있거나 -이 있으면 ''로 감싸야함
const myInfo = {
    age : 26,
    name : 'yun',
    sex : 'male',
    '2a' : 'a',
    'a b' : 'ab',
    'a-b' : 'a-b',
}

// 객체 접근 방법 2가지
myInfo.age;
myInfo['age'];
// 두개가 있는 이유는 위에서 살펴본 '2a', 'a b', 'a-b' 처럼 ''로 감싼 값 때문임
// myInfo.2a : 다른 값, myInfo.'2a' : 불가능
myInfo['2a']    // 이렇게만 표현 가능

// 객체 수정
myInfo.age = 30;

// 객체 추가
myInfo.city = 'daejeon';

// 객체 삭제
delete myInfo.city;
// 하지만 delete로 삭제하면 메모리상 city는 계속 남아있게됨.(객체와 연결만 끊은것)
// 때문에 null을 사용하길 권장
myInfo.age = null;

// 객체리터럴 이외에 함수와 배열도 객체이다. (특수 객체)
function objFunc() { }
objFunc.a = "함수도 객체의 특성을 갖는다.";
const objArr = [];
objArr.b = "배열도 객체의 특성을 갖는다.";
console.log(objFunc.a);
console.log(objArr.b);

// 객체 내부에 선언한 함수를 메서드라고 한다.
const debug = {
    log : () => console.log('hello world!'),
}
debug.log();

// 객체간의 비교
// 객체{} === 객체{} 는 항상 false를 출력한다. (같은 값이여도 메모리상 주소가 다름)
console.log((a = {name : 'yun'}) === (a = {name : 'yun'}));  // false
// 때문에 객체를 따로 저장하고 비교해야한다.
const b = {name : 'yun'};
const arr2 = [b];
console.log(b === arr2[0]);



