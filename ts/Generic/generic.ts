// 제네릭 : 어떠한 타입이 올지 정해지지 않았을 때 
//         인자와 반환값의 타입을 제네릭의 타입과 같은 타입으로 사용하겠다고 명시하는 방법

type User = {
    id: number;
    name: string;
}

type Address = {
    zipcode: string;
    address: string;
}

// 1. 제네릭 대신 any를 사용하면 어떤 타입도 넣을 수 있지만
//    반환된 타입에 any라는 타입이 붙고 원치않는 타입이 들어갈 수 도 있으므로 사용해선 안됨
function pipeOne(value: any): any {
    return value;
}

// 제네릭은 <>를 사용하여 표현한다.
// T는 아직 확정되지 않은 타입이라는 의미로 T를 많이 사용할 뿐 정해진건 아님
// T라는 타입이 들어오면 인자로도 T를 쓰고 반환 값으로도 T를 쓸거라는 의미
function pipeTwo<T>(value: T): T {
    return value
}

let p1 = pipeOne(10);

// 제네릭을 사용한 예제, 이 예제는 타입 추론을 사용한 예시이다.
// 따로 타입 알리어스나 인터페이스로 만든 타입을 사용하려면 객체<타입>으로 호출해야한다.
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

const pipeObjectOne = <T>(obj: T): T => {
    return obj;
}

let po1 = pipeObjectOne({id: 1, name: '김', zipcode: 50213});
let po2 = pipeObjectOne<User>({id: 1, name: '김', zipcode: 50213});

// 클래스에 사용하는 제네릭 타입
// 클래스의 속성, 메서드, 생성자에 모두 사용될 수 있고 제네릭에 여러 타입을 넣을 수 있다.
class State<S, Config={}>{
    private _state: S;
    config: Config;

    constructor(state: S, config: Config) {
        this._state = state;
        this.config = config;
    }

    getState(): S {
        return this._state;
    }
}

let s1 = new State<Address, { active: boolean}>({
    zipcode: "50213",
    address: '서울시',
}, {
    active: true,
})

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);

// 제네릭의 응용
// 제네릭 타입의 Key를 제네릭 타입으로 받아 사용하는 방법
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key){
    return obj[key];
}

let x = {a:1, b:2, c:3, d:4};
let a = ["one", "two", "three", "four"];

getProperty(x, "a");
getProperty(x, "m");
getProperty(a, "g");
getProperty(a, 2);

// 제네릭 응용 2
// 제네릭을 응용하여 선언부에서 타입을 정해줄 수 있다.
interface KeyPair<T, U>{
    key: T;
    value: U;
}

let kv1 : KeyPair<number, string> = {key:1, value: 'Kim'};
let kv2 : KeyPair<number, number> = {key:2, value: 12345};