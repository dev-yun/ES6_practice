// 1. 동기, 비동기
// 동기 : Thread가 작업의 순서대로 하나씩 실행하는 방법 (javascript는 싱글 스레드라서 기본적으로 병행처리가 불가능함)
// 비동기 : Thread가 순서대로 실행하지 않고 JS 엔진의 Call Stack와 브라우저엔진, callback Queue를 사용하여 병행처리하는 방법
// setTimeout을 이용한 비동기 처리 (165라인, 163라인, 162라인 순으로 실행)
function taskA(a, b, cb){
  setTimeout(() => {
    const result = a + b;
    cb(result);
  }, 3000);
}
function taskB(a, cb){
  setTimeout(() => {
    const result = a * a;
    cb(result);
  }, 1000);
}
function taskC(a, b, cb){
  setTimeout(() => {
    const result = a - b;
    cb(result);
  }, 2000);
}
// 비동기 실행을 통해 taskB -> taskC -> taskA 순으로 실행
taskA(3, 4, (result) => {console.log("taskA 결과 값 : ", result)});
taskB(3, (result) => {console.log("taskB 결과 값 : ", result)});
taskC(3, 4, (result) => {console.log("taskC 결과 값 : ", result)});

// 비동기처리의 값을 또다른 비동기처리의 값으로 전달 (콜백 지옥에 빠질 수 있음) => promise, async 등을 사용
taskA(5, 4, (a_result)=>{
  console.log("taskA 결과 값 : ", a_result);
  taskB(a_result, (b_result)=>{
    console.log("taskB 결과 값 : ", b_result);
    taskC(a_result, b_result, (c_result) => {
      console.log("taskC 결과 값 : ", c_result)
    })
  })
})

console.log("코드 끝");

// 2. promise : 비동기 처리를 더 간단하고 직관적으로 돕는 문법

// 2.1 resolve, reject : 비동기 처리의 성공, 실패시 출력값을 결정
// 대기(pending)상태에서 해결(resolve)시 성공(Fulfilled), 거부(reject)시 Rejected상태가 되고 종료됨
// 
function isPositive(number,resolve, reject){
  setTimeout(()=>{
    if(typeof number === "number"){
      // 성공시 resolve
      resolve(number >= 0 ? "양수" : "음수")
    }
    else {
      // 실패시 reject
      reject("주어진 값이 숫자가 아닙니다.")
    }
  }, 2000);
}

// isPositive(10, 
//   (result)=>{
//   console.log("성공적으로 수행됨 : ", result)
//   },
//   (error)=>{
//     console.log("실패 하였음 : ", error);
//   });

function isPositiveP(number){
  const executor = (resolve, reject) => {
    setTimeout(()=>{
      if(typeof number === "number"){
        // 성공시 resolve
        resolve(number >= 0 ? "양수" : "음수")
      }
      else {
        // 실패시 reject
        reject("주어진 값이 숫자가 아닙니다.")
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(100);

res.then((result) => {
  console.log("작업 성공 : ", result);
})
.catch((error)=>{
  console.log("작업 실패 : ", error);
})

// 2.2 promise를 이용하여 앞선 task의 콜백지옥 해결
// function taskA(a, b, cb){
//   setTimeout(() => {
//     const result = a + b;
//     cb(result);
//   }, 3000);
// }
// function taskB(a, cb){
//   setTimeout(() => {
//     const result = a * a;
//     cb(result);
//   }, 1000);
// }
// function taskC(a, b, cb){
//   setTimeout(() => {
//     const result = a - b;
//     cb(result);
//   }, 2000);
// }

// taskA(5, 4, (a_result)=>{
//   console.log("taskA 결과 값 : ", a_result);
//   taskB(a_result, (b_result)=>{
//     console.log("taskB 결과 값 : ", b_result);
//     taskC(a_result, b_result, (c_result) => {
//       console.log("taskC 결과 값 : ", c_result)
//     })
//   })
// })

//위의 코드를 promise로 표현
function promiseTaskA(a, b){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 3000);
  })
}
function promiseTaskB(a){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const result = a * a;
      resolve(result);
    }, 1000);
  })
}
function promiseTaskC(a){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a * -1;
      resolve(result);
    }, 2000);
  });
}

promiseTaskA(10,4)
  .then((a_result)=>{
    console.log("A RESULT : ", a_result);
    return promiseTaskB(a_result);
  })
  .then((b_result)=>{
    console.log("B RESULT : ", b_result);
    return promiseTaskC(b_result);
  })
  .then((c_result) => {
    console.log("C RESULT : ", c_result);
  })


// promise를 변수에 넣어 사용할수도 있습니다.
// const promiseResult = promiseTaskA(10,4)
//   .then((a_result)=>{
//     console.log("A RESULT : ", a_result);
//     return promiseTaskB(a_result);
//   });

// console.log("중간에 다른 코드를 넣을 수 있습니다.")  

// promiseResult  
//   .then((b_result)=>{
//     console.log("B RESULT : ", b_result);
//     return promiseTaskC(b_result);
//   })
//   .then((c_result) => {
//     console.log("C RESULT : ", c_result);
//   })


// 3. async & await : promise를 더 쉽게 사용할 문법
async function helloAsync(){
  return "안녕하세요 Async!";
}
console.log(helloAsync);  // Promise{pendding} => async를 사용하면 자동적으로 promise를 대기상태로 return 
// 즉, promise를 사용하는 구조인 then을 사용가능
helloAsync().then((res) => {
  console.log(res);
})

function delay(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

// async function delayedAsync() {
//   return delay(3000).then(() => {
//     return "3초 delay"
//   });
// }

// 위 코드를 async & await으로 사용가능
async function delayedAsync(){
  await delay(3000);
  return "3초 delay(await 사용)";
}

delayedAsync().then((res) => {
  console.log(res);
})