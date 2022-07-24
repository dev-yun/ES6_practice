// 어떤 타입이 올지 확실하지 않은 상황에서 조건을 걸어 타입을 방어하는 코드를 작성하는 방법
// 타입 스크립트는 불가능한 경우를 우선적으로 판단하므로 타입가드가 필요하다.

function doubleTypeFunction(a: number | string){
    // 유니온 타입으로 number, string이 주어졌을때 string인 경우에만 작동하는 타입 가드 코드
    if(typeof a === 'string'){
        return a.replace('x', 'X');
    }

    // 타입 가드가 없는 경우 number이 오면 replace를 사용할 수 없으므로 에러가 발생한다.
    return a.replace('Y', 'y');
}

doubleTypeFunction(10);

function foo(a?:number | null){
    if(a === null) return;

    console.log('display before');
    // 객체의 메소드에 접근하기 전에 ?를 붙히면 타입의 선택사항이 아니라
    // "객체가 null이면 undefined로 만들어라" 라는 기능이다.
    // 에러일때는 종료되는게 맞는데 억지로 실행하게 하므로 ?를 붙히는게 좋다고 할 수 는 없다.
    console.log(a?.valueOf());
    console.log('display after');
}

foo();

interface Foo{
    foo:string;
    common:string;
}

// is는 타입스크립트의 타입가드용 문법으로 arg와 Foo 타입과 같냐? 라는 의미이다.
// 특정 인터페이스용 객체를 검사하는 코드를 런타임에 심어두면 더 간단한 코드를 작성할 수 있다.
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}

// 하지만 이런 방식의 타입 가드는 인터페이스에 없는 타입을 추가해도 탐지하지 못하는 한계가 존재한다.
// 인터페이스의 객체의 속성이 있는지만 판단하기 때문에
console.log(isFoo({foo:'ok', common: 'wow', active: false}));