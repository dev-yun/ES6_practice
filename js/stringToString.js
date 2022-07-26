// 문자열을 형태가 다른 문자열로 변환하는 방법
// 이 예시는 두번째 단어부터 카멜케이스로 적용하는 방법을 구현

// 1. Array의 메서드를 사용하여 구현
const simpleCamel = (text, splitter = ' ') => text.split(splitter)
                        .map((word, widx)=> word.split('')
                            .map((c, cidx) => widx > 0 && cidx === 0 ? c.toUpperCase() : c.toLowerCase())
                            .join(''))
                        .join('');


// 반복문을 사용해 문자열을 변환하는 방법
function convertCamelName(name){
    let camelName = '';

    for(let i =0, newSpace = false; i < name.length; i++){
        if(name[i] == ' '){
            newSpace = true;
            continue;
        }

        if(newSpace){
            camelName = camelName + name[i].toUpperCase();
            newSpace = false;
        } else {
            camelName = camelName + name[i].toLowerCase();
        }
    }

    return camelName;
}

const camelName1 = convertCamelName('Kim min tae');
const camelName2 = simpleCamel('KIM MIN TAE');

console.log(camelName1);
console.log(camelName2);