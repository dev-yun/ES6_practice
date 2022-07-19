// throw와 Error 생성자를 통해 오류를 함수로 표현하고 처리
function doException() {
    throw new Error("Error 발생!");
}
function noException() {
    return true;
}

function callException(type) {
    if(type === 'do'){
        doException();
    } else {
        noException();
    }
}

// 본 함수에서 오류 처리
function main(){
    try {
        callException('do');
    } catch(e) {
        console.log(e);
    } finally {
        console.log('done');
    }
}

main();