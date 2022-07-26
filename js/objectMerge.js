// 객체는 참조형 데이터 타입이기 때문에 복사를 할 경우 주의해야한다.

// 2-depth의 객체 (깊은 복사와 얕은 복사의 차이를 알기 위한 예제)
const sourceObject = {
    traits: {
        first_name: {
            value: 'Bob',
            source_id: 1,
            updated_at: 1623238587468
        },
        emails_opened_last_30_days:{
            value: 33,
            source_id: 2,
            updated_at: 1623238601089
        }
    },
    cursor: {
        url: '/v1/spaces/lgJ4AAjFN4',
        has_more: false,
        next: ''
    }
};

// 깊은 복사 (2-depth이상의 객체를 복사하는 방법 - 완전 복사)
// 성능이 좋지 않아 작은 객체에선 사용할 수 있지만 큰 객체에는 사용하기 애매함
const newObject1 = JSON.parse(JSON.stringify(sourceObject));

// 얕은 복사 (1-depth의 속성만 복사할 수 있는 방법)
// 얕은 복사를 1-depth, 2-depth, 3-depth ... 모두 처리하는 방식으로 깊은 복사를 할 수 있음
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = {...sourceObject};

console.log(sourceObject.traits.first_name.source_id);

newObject1.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

// 2-depth부터 참조가 되었다.
newObject2.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject3.traits.first_name.source_id = 500;

console.log(sourceObject.traits.first_name.source_id);

// 깊은 복사를 처리하는 함수 작성
function deepCopyObject(obj){
    const clone = {};
    for (const key in obj){
        if(typeof obj[key] == "object" && obj[key] != null){
            clone[key] = deepCopyObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id);

newObject4.traits.first_name.source_id = 1000;

console.log(sourceObject.traits.first_name.source_id);



const store = {
    user: null,
    cart: [],
    config: {
        multiDevice: false,
        lastLoginDate: 'Wed Jun 09 2021 20:46:55 GMT+0900',
    }
}

// store 객체의 일부 정보를 유지하고 나머지 정보를 대체하는 방법
const newObject5 = {
    ...deepCopyObject(store),
    // 기존의 user와 cart는 그대로 사용하고 config만 새로운 값으로 대체한다.
    config:{
        // ...store.config를 하지 않으면 multiDevice 속성이 사라지기 때문에 store 속성을 펼치고 LastLogin 속성만 새로 대체한다.
        ...store.config,
        lastLoginDate: new Date(),
    },
};

console.log(newObject5);


// default 값을 설정하는 스킬
const DefaultStyle = {
    color: '#fff',
    contColor: '#999',
    fontSize:14,
    fontWeight: 200,
};

// 기본 설정을 유지하면서 새로운 객체를 추가하는 방식
function createParagraph(config){
    config = {...DefaultStyle, ...config};

    console.log(config);
}

createParagraph({fontSize:12});