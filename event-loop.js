
//setInterval, setTimeout => timeout 단계

// setImmediate() => check 단계에서 처리

// process.nextTick() => 이벤트 루프 시작 시와 이벤트 루프의 각 단계에서 처리, 얘를 쓰면 들어오자마자 바로 처리한다는 느낌

// let count = 0
// const cb = () => {
//     console.log(`Processing nextTick cb ${++count}`);
//     process.nextTick(cb);
// }
//
// setImmediate(() => console.log('setImmediate is called.'));
// setTimeout(() => console.log('setTimeout executed'), 100);
// process.nextTick(cb);

// => nextTick이 호출되면 이벤트 루프가 계속되기 전에 process.nextTick에 전달된 모든 콜백들이 해결됩니다.
//     이렇게 process.nextTick()이 재귀적으로 호출하면 이벤트 루프를 차단하게 됩니다.
// 따라서 위 코드의 setImmediate() 및 setTimout() 콜백은 실행되지 않습니다.

// let count = 0;
// const cb = () => {
//     if (count < 2000) {
//         console.log(`processing count number: ${++count}`);
//         setImmediate(cb);
//     }
// };
//
// setImmediate(cb);
// setTimeout(() => console.log('setTimout executed'), 50);
// console.log('Start');

//setImmediate는 재귀적으로 호출되도 eventloop을 차단하지 않고, setTimeout 메소드가 일정 시간이 지나면 처리된다.
// 공식적으로는 setImmediate를 모든 케이스에서 사용하는 것을 추천한다.

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
//
// setImmediate(() => {
//     console.log('setImmediate');
// });

// process 성능에 의해 제한되기 때문에 누가 더 빨리 출력되는지 비교해보면 랜덤이다.

// io 주기에 있는 경우에는 무조건 setImmediate가 먼저 실행된다. 