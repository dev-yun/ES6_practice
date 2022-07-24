// js,ts에서는 데이터를 주고 받을 때 객체를 사용하는 것이 가장 효율적인데
// 객체는 코드가 실행할 때 메모리 상에서만 존재하고 프로그램이 종료되면 사라진다.

// 때문에 데이터를 교환하기 위해 js 객체와 유사한 포맷인 JSON을 저장하고 데이터를 주고받을 때 사용하게 되었다.

// JSON 포맷은 객체와 매우 유사하고 문자열로 이뤄져 있다.
// JSON는 데이터를 js 객체로 만들어지기 위해 만들어진 포맷이다.

// JSON은 js객체보다 엄격한 기준을 가지고 있는데
// 1. key도 value로 문자열인 경우 항상 ""를 붙혀줘야 한다.(' '는 안됨 항상 더블 쿼터)
// 2. 마지막 속성에는 ,을 붙히면 안된다.
// 3. value의 종류가 제한적이다. (문자열, 숫자, 배열, 객체, boolean만 가능하다. 함수는 안됨)  
const jsonString = `
    {
        "name": "Kim min tae",
        "age": false,
        "bloodType": "B"
    }
`;

// JSON.parse => JSON을 객체로 변환한다.
// JSON.stringify => 객체를 JSON으로 변환한다.
// JSON은 엄격한 기준이 있는 만큼 예외처리를 작성하여 더 정교한 코드를 작성해야한다.(에러처리를 하지 않으면 바로 종료되어 에러 부분을 알 수 없음)
try{
    const myJson = JSON.parse(jsonString);
    
    console.log(myJson.name);
    
    console.log(JSON.stringify((myJson)));

} catch(e){
    console.log('다시한번 시도해 주세요.')
}