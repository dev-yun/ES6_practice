type Book = {
    title: string;
    copyright?: string;
    author?: string;
};

// 기본적인 Array에 타입을 붙혀 생성하는 방법
const books: string[] = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄량이 길들이기",
    "헨리 8세",
];

// 반복식과 반복문의 차이
// 1. 반복식은 반복문보다 성능이 떨어진다.
// 2. 반복식은 변수가 존재하지 않아 변수로 인한 에러가 발생할 가능성이 줄어든다.
// 3. 여러 반복식이 존재하여 다양한 테크닉을 활용할 수 있다.
// 4. 메서드 체이닝이라는 방식으로 반복식을 이어 사용할 수 있다.

// 반복식(forEach)를 활용하여 배열을 순회하는 방법
books.forEach((book: string, idx: number, books: string[]) => {
    console.log(book, idx);
})


// 반복식(map)을 활용하여 배열을 순회하는 방법
// map은 forEach와 다르게 return 값을 반환하여 변수에 할당한다.
// 이를 활용하여 데이터를 다른 자료형의 데이터로 쉽게 변환할 수 있다.(아래는 배열을 객체로 변환)
const bookObject: Book[] = books.map((book:string) =>{
    return {
        title:book,
        author: undefined,
    };
});

console.log(bookObject);


// map을 메서드 체이닝이라는 방식으로 연결하여 사용하는 방법
const ShakespeareOneBooks: Book[] = books.map((book: string) => ({
    title:book
}))
.map((book: Book) => ({
    ...book,
    author: "William Shakespeare"
}));

console.log(ShakespeareOneBooks);


// 배열 내부의 일급 함수를 빼내어 객체에 할당하고 사용하는 방법
// 가독성이 더 뛰어나고 재사용, 유지보수가 더 좋은 방식이다.
const bookTitleToBookObject = (book: string) => ({title:book});
const makeAuthor = (name: string) => (book: Book) => ({
    ...book,
    author: name
});

const shakespeareTwoBooks: Book[] = books
.map(bookTitleToBookObject)
.map(makeAuthor("William Shakespeare"));

console.log(shakespeareTwoBooks);


// filter 메서드를 통해 메서드 내의 값이 true값만 반환한다.
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
    book.title.includes("헨리")
);

console.log(henry);


// reduce를 이용한 누적값을 반환하는 방법 
const someNumbers: number[] = [10,5,3,14,56];

const someNumber = someNumbers.reduce((a:number, b:number) => a + b , 0)

console.log(someNumber);


// reduce를 단순히 숫자를 누적하는 것이 아닌 
// 배열의 여러 객체를 하나의 객체로 합치는 테크닉
// {border..}, {fontsize..}, {className..} => {border.. , fontsize.. , className..}으로 합쳐짐
type SomeObject = {
    [key: string]: string | number;
};

const someObjects: SomeObject[] = [
    { border: "none"},
    { fontSize: 24},
    {className: "box sm-box"},
];

const someObject: SomeObject = someObjects.reduce(
    (a: SomeObject, b: SomeObject) => ({...a, ...b}),
    {}
);
console.log(someObject)


// 유사배열을 사용할 수 있게 만드는 Array.from 메서드
// - 유사배열이란 배열과 마찬가지로 여러 데이터를 가지고 있고 순서와 몇개가 들어있는지 알 수 있는 형태이지만
//   배열이 갖고 있는 도구 (map, forEach, reduce, filter...)등을 갖고 있지 않은 배열을 의미 (아래에서 arguments가 유사배열임) 
function sumNumbers(): number{
    return Array.from(arguments).reduce((a:number, b:number) => a + b, 0);
}

// console.log(sumNumbers(10,20,30,40,50))

// 하지만 arguments를 사용하는 방식은 매개변수가 없어서 함수 내용을 보지 않으면 가변인자가 들어가는지 알 수 없다.
// 때문에 ...args를 통해 가변인자를 명시하고, 타입도 명시하여 더 깔끔하고 안전한 코드를 작성해야 한다.
function sumNumbersForTypeScript(...args: number[]) : number{
    return args.reduce((a:number, b:number) => a + b , 0);
}

console.log(sumNumbersForTypeScript(10,20,30,40,50))