// iteration : 반복 가능한 구조를 가진 객체들을 의미한다. (Array, Map, Set, generator function 등등..)
// iteration protocol 규격 : for .. of 구조에서 어떠한 value들이 loop되는 것과 같은 iteration 동작을 수행할 수 있어야 한다.
// 1. 반환값 객체에 next라고 하는 메소드가 있어야하고 next() 메소드는 done(boolean)과 value(any)속성을 반환해야 한다.

// object는 for .. of도 수행할 수 없고 next() 메서드도 존재하지 않는다.
// object가 iterable 하기 위해서는 @@iterator 메소드를 구현해야한다.


const myIterable = {};

// Symbol로 부터 반환되는 모든 심볼 값은 고유하고 이는 객체 프로퍼티의 식별자로 사용될 수 있다.
// 이는 Symbol 데이터 형식의 유일한 목적이다.
// Symbol("foo") === Symbol("foo"); // false
myIterable[Symbol.iterator] = function* (){
    let i = 1;
    while(i<=100){
        yield i++;
    }
};

// 아래 코드를 실행할 시 의문점
// 1. 객체인데 어떻게 for .. of를 사용할 수 있을까?
// 2. 제네레이터 함수를 호출하는데 왜 next()를 사용하지 않아도 코드가 실행될까?

// 1. 객체의 key를 symbol.iterator를 통해 생성하였는데 이는 객체에 대응하는 기본 iterator를 저장한다.
//    때문에 객체가 iterator화 되어서 for .. of 를 사용할 수 있게 된다. (@@iterator 메서드 사용 예제)
// 2. for .. of는 iteration protocol을 준수하는 반복문이다. 
//    때문에 next()가 숨겨져있고 for .. of를 통해 반복문이 실행될때마다 실행된다. (반복마다 done(true)인지 done(false)인지를 구분한다.)
for(const n of myIterable){
    console.log(n);
}