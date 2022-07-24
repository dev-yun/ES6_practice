// 필요로 하는 라이브러리가 타입스크립트를 지원하지 않는 경우가 많다.
// js로 만들어졌기 때문에 인터페이스도 없고 타이핑도 되어있지 않기 때문에..
// 이럴 때 @types를 통해 해결할 수 있다.

// uuid라는 라이브러리를 사용할때 
// 단순히 npm install uuid로 설치하고 사용하면 에러가 발생한다.

// 해결법 1. 직접 설치한 라이브러리에 들어가서 직접 타이핑을 한다.
// 해결법 2. 이렇게 타이핑이 되지 않은 라이브러리를 모아놓고 타이핑을 하여 저장한 @types라는 패키지 저장소가 있다.  
// 2번째 방법을 사용하기 위해선 npm 사이트에 @types/라이브러리 가 있는지 확인하고 사용해야한다. (없다면 1번 방법을 진행해야함)
// uuid는 @types가 있기 때문에 npm install @types/uuid를 사용할 수 있다.

import { v4 } from 'uuid';

type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
}

// id를 유일한 값으로 만들고 싶어 uuid라는 유니크한 문자열을 제공하는 라이브러리를 사용하려고 한다.
// 하지만 uuid가 타입스크립트를 지원하지 않을때 해결 방법은?
const makeObject = (): UniqObject => ({
    id: v4(),
})

console.log(makeObject());
console.log(makeObject());
