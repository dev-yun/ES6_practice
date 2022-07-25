// 애플리케이션에서 사용자의 행동(클릭)을 통해 UI가 동작하는 방식은 사용자가 언제 UI에 반응할지 알 수 없다.
// 이 때문에 addEventLister을 사용하는 이벤트 시스템이 등장하였다.

// 이벤트 시스템 상에서 이벤트가 중복될 때 이벤트의 전파 방법
// 1. 이벤트 버블링 : 안쪽에서 이벤트가 발생할 경우 이벤트가 상위 태그로 이동하는 동작방식
// 2. 이벤트 캡처링 : 안쪽에서 이벤트가 발생할 경우 상위 태그부터 이벤트가 동작하며 작동한 하위 태그까지 전파되는 동작 방식
// 이벤트 버블링은 하위 -> 상위로 전파, 이벤트 캡처링은 상위 -> 하위로 전파된다. (완전히 서로 상반됨)

function main(){
    const BUBBLING_PHASE = false;
    const CAPTURING_PHASE = true;
    const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING']
    
    // eventLogger에는 Event System이 주는 이벤트 객체가 넘어오고 
    // 이벤트 객체의 수 많은 속성 중 target과 currentTarget와 eventPhase을 사용한다.
    // target에는 클릭 당시 태그 정보, currentTarget에는 전파되는 태그 정보, eventPhase에는 index번호가 들어간다.
    function eventLogger({target, currentTarget, eventPhase}){
        console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
        console.log(target, currentTarget, eventPhase);
    }

    let divs = document.querySelectorAll('div');
    // addEventListener의 3번째 인자는 이벤트가 중첩됐을때 어떻게 전파할 것 인지 결정하는 옵션이다. (true면 캡처링, false면 버블링 (기본값 : false))
    divs.forEach(div => div.addEventListener('click', eventLogger, CAPTURING_PHASE));
}

// html 문서도 비동기적으로 호출되기 때문에 js에서는 언제 로딩될지 알 수 없다.
// 때문에 로딩되기 전에 DOM에 접근하면 에러가 발생하므로 이를 막기 위해 DOMContentLoaded라는 이벤트가 생겼다.

// html문서가 모두 완료되면 main함수를 실행하라는 의미이다.
document.addEventListener('DOMContentLoaded', main);