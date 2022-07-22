const c1 = {
    name: 'C1',
    color: 'red',
};

const c2 = {
    name: 'C2',
    width:300,
};

const c3 = {
    name: 'C3',
    height:100,
};

console.log(c1);
console.log(c2);
console.log(c3);

// 모든 객체는 __proto__라는 속성을 가지고 있다.
// __proto__의 역할은 프로토체이닝의 상위 객체를 가리키고 있는 것 이다.

// c1.__proto__

// c1에는 name, color라는 속성밖에 없지만 
// 프로토체이닝을 통해 상위 객체인 Object의 메서드인 toString을 받아와 사용한 것 이다.
console.log(c1.toString()); // [object Object]


c1.__proto__ = c3;
c3.__proto__ = c2;
console.log(c1.width);

// 함수는 객체와 달리 __proto__ 외에 prototype이라는 객체도 가지고 있다.
// 함수의 prototype 객체는 해당 함수를 가리킨다.
function Foo(name){
    this.name = name;
    this.__proto__ = Foo.prototype;
}

// prototype을 통해 함수에 속성을 추가할 수 있다.
Foo.prototype.lastName = "WooWa";

const f = new Foo('Kim min tae');

console.log(f.name);
// 프로토타입 체이닝을 통해 Foo.prototype의 속성인 lastName을 참조한다.
console.log(f.lastName);