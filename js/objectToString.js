// 개발을 하다보면 객체를 문자열로 변환할 경우들이 많다.
// 단순히 JSON.stringify를 통해 문자열로 변환해도 되지만 
// 이는 객체를 다시 객체화 하기 위한 임시로 객체 형태의 문자열로 변환하는 방법으로 객체를 진짜 문자열로 변환하는 것과는 약간 차이가 있다.

// 객체를 완전히 다른 형태의 문자열로 변환하는 방법 (ex) 객체를 csv형태로 변환)


/*
문자열 포맷: id,item,price,discount
*/

const cartItem = [
    {id: 1, item: '핸드밀', price: 40000, discount: 0,},
    {id: 2, item: 'A4용지', price: 4000, discount: 0,},
    {id: 3, item: '수영복', price: 120000, discount: 0,},
    {id: 4, item: '색연필72색', price: 150000, discount: 0,},
];

// for문을 사용하여 변환하는 방법
const cartItemsArray = [];

for(const item of cartItems){
    // id, item, price, discount같은 속성을 한줄로 받기 위한 배열 row 
    const row = [];

    // entries : [key, value]형태로 객체의 key와 value를 반환한다.
    // 현 상황에서는 value만 추출하니 Object.values(item)으로 받아와도 될듯하다.
    for(const [, value] of Object.entries(item)){
        row.push(value);
    }

    // value만 추출하여 저장한 row를 문자열로 만들기 위해 join한다.
    cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join('==='));

// Array의 메서드를 활용한 방법
const extractValueInObject = obj => Object
    .values(obj)
    .map((value) => String(value));


const cartItemString = cartItems
    .map(extractValueInObject)
    .join('===');

console.log(cartItemString);