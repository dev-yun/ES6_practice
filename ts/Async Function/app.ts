// 기본 promise 객체를 반환하는 delay 함수
function delay(ms:number) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() *10) % 2 ===0){
                resolve('success');
            } else {
                reject('failure');;
            }
        }, ms);
    });
}

// delay함수를 promise 방식으로 then, catch를 통해 비동기 호출하는 방식
// 이 방식은 callback함수를 통해 비동기를 실행하는 것으로 -동기적으로 코드를 작성할 수 없다-.
delay(3000)
    .then((result: string) =>{
        console.log('done promise' + result);
    })
    .catch((error: string) =>{
        console.error('fail promise!' + error);
    });


// 기본 함수에 async를 통해 비동기 함수를 작성하면 동기적으로 코드를 작성하고 실행은 비동기적으로 되게 할 수 있다.
async function main(): Promise<void>{
    try{
        console.log('start job');
        const result = await delay(3000);
        console.log('next job');
        console.log('done async!' + result);
    } catch(e) {
        console.error('fail async' + e);
    }
}

main();