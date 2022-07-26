// 함수의 표현방법 3가지
// 1. 함수 선언문
function func1() {}
// 2. 함수 표현식 
const func2 = function() {};
// 3. 화살표 함수(함수 표현식의 한 종류임)
const func3 = ()=>{};
// 호이스팅, this바인딩 등에서 차이가 생김
// 함수에서 return값을 주지 않으면 기본적으로 return undefined가 있는것임
// 매개변수(parameter) : 함수 선언시 주어지는 값
// 인수(argument) : 함수 호출시 매개변수에 들어갈 값
function func(param1, param2, param3, param4) {
    console.log(param1, param2, param3, param4);
    console.log(arguments);
}
func("argu1", "argu2", "argu3");
// argu1 argu2 argu3 undefined
// Arguments(3) ['argu1', 'argu2', 'argu3', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 매개변수와 인수의 개수는 달라도됨. (인수가 부족하면 undefined반환, 인수가 더 많으면 무시)
// 함수 내에선 arguments란 변수를 사용할 수 있는데 내부엔 호출한 함수의 인수들이 들어있음
// 화살표 함수 특징
// 1. 화살표 함수 다음에 바로 return값이 오면 {} 생략가능, () 도 사용가능
const add1 = (x, y)=>{
    return x + y;
};
console.log(add1(3, 5)); // 8
const add2 = (x, y)=>x + y;
console.log(add2(10, 20)); // 20
// 2. 다른 함수 선언과 다르게 this 바인딩이 정적으로 결정된다. (선언한 화살표 함수의 상위 스코프에 연결)
var name = "yun";
var info = {
    name: "kim",
    getName: function() {
        console.log(this.name);
    }
};
info.getName(); // .을 기준으로 getName의 상위 스코프인 info를 this로 바인딩하여 'kim'이 출력된다.
var name2 = "yun";
var info2 = {
    name2: "kim",
    getName: ()=>console.log(this.name2)
};
info2.getName(); // this가 정적으로 바인딩되어 info2의 상위 스코프인 window를 가리키고 'yun'이 출력된다.

//# sourceMappingURL=index.044e8dcd.js.map
