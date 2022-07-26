// handlebars는 템플린 엔진이라 불리는 라이브러리로 문자열을 쉽게 처리할 수 있게 도와준다.
// mustache라는 템플릿 엔진에서 더 간편하게 사용할 수 있게 확장되었다.

// 1. 틀에 맞춰 데이터를 넘겨주면 틀에 맞춰 html 결과물을 출력한다.
// 2. 객체의 속성 명을 {{}}로 감싸서 사용한다.
// 3. {{}}내부에는 간단한 조건문 반복문도 사용할 수 있다.
// 4. 기본으로 제공된 #if, #each 외에도 원하는 custom helpers 기능을 추가할 수 있다.

const source = `
<div class="entry">
    <h1>{{title}}</h1>
    {{#if hasList}}
    <ul>
        {{#each list}}
            <li>{{title}} - {{director}}</li>
        {{/each}}
    </ul>
    {{else}}
    <div class="jumbotron">
        등록된 영화 목록이 없습니다.
    </div>
    {{/if}}
</div>
`;

let template = Handlebars.compile(source);

let data = {
    title: '영화',
    list: [
        {title: '너의 이름은', director: '신카이 마코토', actors: ['카미키 류노스케', '카미시라이시 모네',]},
        {title: ' 패신저스', director: '모튼 틸덤', actors: ['제니퍼 로렌스', '크리스 프렛', '마이클 쉰']},
        {title: '사랑하기 때문에', director: '주지홍', actors: ['차태현', '김유정', '서현진', '박근형']},
        {title: '내 어깨 위 고양이, 밥', director: '로저 스포티스우드', actors: ['김하늘', '유인영']},
    ]
};

data.hasList = data.list.length > 0;

document.querySelector('#app').innerHTML = template(data);