const person = {
    name: 'Kim min tae',
    age:40,
    getAge() {
        return this.age;
    }
};

// person.age, person.getAge()에서는 this가 가리키는 대상이 명확히 존재한다.
person.age;
person.getAge();

// 하지만 age로 person.getAge 함수를 대입할 경우
const age = person.getAge;

// age()를 실행하면 getAge() { return this.age }는 this의 대상을 알지 못하여 undefined를 출력한다.
// age();

// 이러한 문제를 해결하기위한 방법이 3가지 존재한다. call, apply, bind

// 1. call : 명확하게 컨텍스트 객체를 지정해준다. 
age.call(person);


class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        // 2. bind : getAge가 언제 어디서 소유자가 불명확한 상태에서 호출되어도 현재 저장한 this로 고정시켜주고 반환한다.
        this.getAge = this.getAge.bind(this);
    }

    getAge(){
        return this.age;
    }
    // this 바인딩을 위한 또 다른 방법으로 lextical context를 사용하는 방법이 있다.
    // 코드를 보고 어휘적으로 확인되는 this로 고정한다.
    // arrow function을 사용하여 구현할 수 있다.
    getName = () => this.name;
}

const p1 = new Person('Kim mintae', 30);

p1.getAge();

const myAge = p1.getAge;

// myAge.call(p1);
// bind를 통해 this를 고정한 방법
myAge();

p1.getName();

const x = p1.getName;
x();

// arrow function을 사용하면 컨텍스트를 고정시켜 별다른 테크닉 없이 this가 꼬이는 것을 막을 수 있다.
// 하지만 this를 특정 객체로 가리키게 하기 위한 방법들이 필요할때에는 어울리지 않는 방식이다.