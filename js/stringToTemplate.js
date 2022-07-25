const userName = 'Hong gildong';
const bolder = text => `<b>${text}</b>`;


console.log(`HI~ ${userName}`);

// ${}내에는 값을 반환하는 모든 연산자를 넣을 수 있다.
console.log(`HI~ ${bolder(userName)}`);


// Tagged Template
// template를 통해 태그를 만들고 그 내부의 옵션을 바깥쪽에서 제어하고 싶을때 사용하는 고급 기법이다.
function div(strings, ...fns){
    const flat = s => s.split('\n').join('');

    return function (props){
        // 템플릿에서는 ${}을 기준으로 문자열이 배열로 쪼개진다.
        // 때문에 아래와 같이 배열을 기준으로 다시 합쳐줘야한다.
        return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"</div>`
    }
}

// 여기서 div는 위에서 선언한 함수 div()이다.
// 그런데 호출하여 매개변수를 받는 것을 ``으로 대체하였다. => Tagged Template
// ``로 묶인 문자열이 div함수의 첫번째 인자로 들어간다.
// ``로 묶인 문자열 중 ${}는 몇개든 올 수 있는데 이 ${}들이 div함수의 두번째 가변인자로 들어간다.
const Div = div`
    font-size: 20px;
    color: ${props => props.active ? 'white' : 'gray'};
    border: none;
`;

console.log(Div({ active: false }))