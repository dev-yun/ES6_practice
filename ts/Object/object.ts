// object를 만드는 3가지 방법

// 1. 객체 리터럴 사용 {}
const obj = {
    name : 'Min Tae',
    age: 40,
    getFamilyName: function () {
        return 'Kim';
    },
    getLastName: () => 'Yun', 
    getBloodType(){
        return 'B';
    }
}

// 2. class를 통해 instance 객체 생성
class Person {
    _bloodType: string;

    constructor(bloodType: string) {
        this._bloodType = bloodType;
    }

    set bloodType(btype: string){
        if(btype === 'A' || btype === 'B' || btype === 'O' || btype === 'AB'){
            this._bloodType = btype;
        }
    }

    get bloodType(){
        return  `${this._bloodType} 형`
    }
}

const p1 = new Person('B');

// 3. Object.create()를 통해 객체 생성
const myObj = Object.create(null, {
    name: {
        value: 'Kim mintae',
        writable: false,
        configurable: false
    }
})

// 4. function의 반환값을 객체로 표현
type blood = { bloodType : string};

function person(bloodType : string) : blood{
    return {
        bloodType
    };
}

person("B")


// 객체의 속성과 속성 값을 바꾸지 못하게 하는 방법
// 1. 타입 스크립트인 경우 => 타입을 생성하여 필수 타입들을 명시함으로써 속성을 지우지 못하게 한다.
// readonly를 통해 속성 값을 바꾸지 못하게 할수도 있다.
type MyObject = {
    name?: string;
    age: number;
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

// 2. 클래스를 만들고 getter, setter 문법을 사용하여 방어 코드를 만들고 속성 값을 바꾸지 못하게 하는 경우
// (위의 class 코드 참고)
// p1.bloodtype = "D"  => 안됨

// 3. Object.create()로 객체를 생성하고 writable, configurable 속성을 사용하는 경우
// writable : true : 값을 바꿀 수 있음, writable = flase : 값을 바꿀 수 없음
// configurable : true : 속성을 지울 수 있음, configurable : false : 속성을 지울 수 없음
// (위의 Objcet.create() 코드 참고)
