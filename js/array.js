const array1 = ['나', '다', '라', '마', '바'];
// 배열에 요소 추가 방법
// 1. 가장 앞에 요소 추가 : unshift
array1.unshift('가');
console.log(array1);    // ['가', '나', '다', '라', '마', '바']
// 2. 가장 뒤에 요소 추가 : push
array1.push('사');
console.log(array1);    // ['가', '나', '다', '라', '마', '바', '사']

// 배열에 요소 제거 방법
// 3. 첫번째 요소 제거 : shift
array1.shift();
console.log(array1);    // ['나', '다', '라', '마', '바', '사']
// 4. 마지막 요소 제거 : pop
array1.pop();
console.log(array1);    // ['나', '다', '라', '마', '바']
// 5. 중간 요소 제거 : splice(제거할 요소 위치 입력,제거할 요소부터 몇개를 지울지 입력(입력 안할시 시작지점부터 모두 삭제))
array1.splice(1,1);
console.log(array1);    // ['나', '라', '마', '바']
// 5.5 splice는 제거와 동시에 추가도 가능
array1.splice(1,2,'바','사','아');
console.log(array1);    // ['나', '바', '사', '아', '바']

// 추가한 값은 임의의 변수에 대입할 수 없지만, 제거한 값은 임의의 변수에 대입가능

let added = array1.unshift('가');
// 5가 출력되는데 array1의 length임
console.log(added);     // 6
let removed = array1.shift();
// 삭제된 '가' 가 할당됨
console.log(removed);   // 가

// 6. 배열에서 요소 검색 : includes  ==> true, false 반환
const search1 = array1.includes('사');
console.log(search1);   // true
const search2 = array1.includes('하');
console.log(search2);   // false

// 7. 배열에서 요소 검색 2 : indexOf, lastIndexOf  ==> 정확한 요소 위치 반환
// 중복된 값이 있을시 indexOf는 앞에서부터, lastIndexOf는 뒤에서부터 검색, 없는 값이면 -1 반환
const arrayIndex = array1.indexOf('바');
console.log(arrayIndex); // 1
const arrayIndex2 = array1.lastIndexOf('바');
console.log(arrayIndex2); // 4
const arrayIndex3 = array1.indexOf('하');
console.log(arrayIndex3); // -1

// 배열의 특정 요소 모두 제거 방법
const arr = ['1', '3', '5', '3', '7', '9', '3', '3', '4' ,'3', '10'];
while(true){
    let newIndex = arr.indexOf('3');
    if (newIndex === -1){
        break;
    }
    arr.splice(newIndex ,1);
}
console.log(arr);