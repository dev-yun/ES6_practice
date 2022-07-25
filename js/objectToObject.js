const sourceObject = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
};

// sourceObject를 targetObject의 형식으로 변환할 예정
const targetObject = {
    aGroup:{
        a:1,
        b:2,
    },
    bGroup:{
        c:3,
        d:4,
        e:5,
    }
};

// 그룹 정보를 갖고 있는 메타 정보
const groupInfo = {
    aGroup: ['a', 'b'],
    bGroup: ['c', 'd', 'e'],
};

function makeGroup(source, info){
    // 이걸 보자마자 reduce를 사용하려 만든 함수구나! 라는 생각을 할때까지 연습
    const merge = (a, b) => ({...a, ...b});
    // console.log(Object.keys(info));
    return Object.keys(info)
        .map(group => ({ [group] : info[group]
            .map(key => ({ [key]: source[key]}))
            .reduce(merge, {})
        }))
        .reduce(merge, {});
}

console.log(makeGroup(sourceObject, groupInfo))