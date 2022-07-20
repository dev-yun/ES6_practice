// 일급 함수란 일반적인 값처럼 사용할 수 있는 함수를 의미한다.
// 즉, 인자로도 사용될 수 있고, 변수의 값으로 사용될 수 있으며 return 값으로도 사용될 수 있다.

// 1. 인자로 사용되는 일급 함수
function ul(child: string): string {
    return `<ul>${child}</ul>`;
}

function ol(child: string): string {
    return `<ol>${child}</ol>`;
}

function makeLI(
    container: (child: string) => string,
    contents: string[]
): string {
    const liList: string[] = [];

    for (const content of contents) {
        liList.push(`<li>${content}</li>`)
    }

    return container(liList.join(''));
}

const htmlUL = makeLI(ul, ['월', '화', '수','목','금','토','일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);

// makeLI함수의 인자로 함수를 넣음으로써 ul, ol 함수를 매개변수로 사용할 수 있게 되었다.
// 이처럼 인자로 함수를 사용하면 외부에서 여러 함수를 통해 컨트롤 할 수 있으므로 매우 유연한 코드를 구사할 수 있다.


// 2. 반환 값으로 사용되는 일급 함수
function salePrice(discountRate: number, price: number): number{
    return price - (price * (discountRate * 0.01));
}

console.log('여름 세일 -' + salePrice(30, 567000));
console.log('겨울 세일 -' + salePrice(10, 567000));

function discountPrice(discountRate: number): Function{
    return function(price: number): number{
        return price - (price * (discountRate * 0.01));
    }
}

console.log('여름 세일 -' + discountPrice(30)(567000));
console.log('겨울 세일 -' + discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);


console.log('여름 세일 -' + summerPrice(567000));
console.log('겨울 세일 -' + winterPrice(567000));

// salePrice처럼 두 number타입의 변수를 인자로 받아 원하는 number 값을 반환받을 수 있지만
// discountPrice처럼 return값을 일급 함수로 표현함으로써 반환값으로 함수를 사용할 수 있다.

// 이처럼 사용하는 코드의 장점은 53,54번째 줄에 나타나는데, 변수에 반환되는 함수를 넣음으로써
// 코드의 표현력을 한층 높힐 수 있게된다. 
// (만약 여름세일, 겨울세일과 같은 레이블이 없다면 discountPrice로는 무슨 세일인지 표현할 길이 없다.)