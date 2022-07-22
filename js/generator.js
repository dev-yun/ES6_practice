// 제네레이터 함수는 기존의 함수와 다르게 종료 시점을 정할 수 있는 함수이다.
// 기존 함수와 동일하게 return을 만나면 종료되고, yield를 만나면 값을 반환한다.
// 특이한 점은 yield를 여러번 사용할 수 있어, 값을 여러번 반환할 수 있다는 점이다.


// 일반 함수는 클로저를 통해 energy에 접근하는 방식으로 코드를 실행한다.
// return 값으로 함수를 주고 상위 스코프의 변수를 참조하는 방식으로 클로저 실행
function makeInfiniteEnergyGenerator(){
    let energy = 0;
    return function (booster = 0){
        if(booster){
            energy += booster;
        } else {
            energy++;
        }

        return energy;
    };
}

// 객체에 함수의 return 함수를 담아 실행한다.
const energy = makeInfiniteEnergyGenerator();

for(let i =0; i<5; i++){
    console.log(energy());
}

console.log(energy(5));


// 제네레이터 함수는 클로저를 사용하지 않고도 똑같은 일을 할 수 있다.
// 호출 방식은 function뒤에 *을 붙히고 반환값에는 yield를 사용하면 된다.
function* infiniteEnergyGenerator() {
    let energy = 1;
    while(true){
        const booster = yield energy;

        if(booster){
            energy += booster;
        } else {
            energy++;
        }
    }
}

// 객체에 제네레이터 함수를 담고 next를 통해 실행한다. 
// 객체.next()가 실행될때 마다 다음 yield값을 반환하고 멈춘다.
const energyGenerator = infiniteEnergyGenerator();


for(let i =0; i<5; i++){
    console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5))

// 더 알아야할 점
// 1. 변수.next()를 실행하면 제네레이터 함수가 처음부터 실행되는 것이 아니다. 이전에 멈춘yield 다음 코드부터 실행된다. 
// 2. 제네레이터 함수는 yield로 반환된 값 value와 done 이라는 속성을 반환하는데, return을 만나기 전까지는 done은 false 속성, return을 만나면 true로 변하며 제네레이터 함수가 종료된다.
//    즉, 제네레이터 함수도 return을 사용할 수 있고 일반함수와 마찬가지고 return을 만나면 함수가 종료된다.

