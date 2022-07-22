// typescript에만 존재하는 데이터 타입 => tuple (배열의 길이와 각각의 요소에 타입을 지정할 수 있음)
// js의 배열을 확장한 개념으로 배열의 모든 기능을 가지고 있다.

// 차이점 : typing하면서 배열이 가질 수 없는 제약사항을 하나 걸 수 있다.
// 제약사항 : 원소의 수와 타입을 제어한다.

// 아래에서 tuple은 [number, string, string]이고 값은 이에 맞춰 항상 3개의 값을 갖고, number, string, string 타입을 갖어야 한다.
const address: [number, string, string] = [14023, '서울시,', '송파구'];

let [zipcode, address1] = address;

// zipcode = '12345'; 오류(zipcode는 구조 분해 할당을 통해 number 타입을 받았다)

// 튜플을 사용함으로써 배열의 추가, 변경에도 강력하게 타입을 맞춰 사용할 수 있게 된다.
type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
    ['헨리 8세', '세익스피어', 1884],
    ['헨리 8세', '세익스피어', 1884],
];

BookData.push(['a', 'b', 23]);


// 튜플을 사용하지 않는 경우
// 배열에 길이와 타입이 지정되지 않아 기존의 타입과 다른 타입도 들어갈 수 있다.(불안전)
function getArrayOne(): any[]{
    return [14023, '서울시', '송파구'];
}

let address2 = getArrayOne()[2];

address2 = 12;

// 튜플을 사용하는 경우
// 배열의 길이와 요소에 타입을 지정함으로써 더 안전한 코딩을 할 수 있다.
type Address = [number, string, string];

function getArrayTwo(): Address {
    return [14023, '서울시', '송파구'];
}

let address3 = getArrayTwo()[2];

// address3 = 12; 타입 오류
address3 = "강남구";