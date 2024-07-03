if (1) {
    console.log("=== 재귀를 활용한 sum ===")
    const sum = v => v > 1 ? v + sum(v - 1) : 1;
    let result = sum(10);
    console.log("result: ", result);
}

if (1) {
    console.log("=== 꼬리물기 최적화 재귀 ===")
    // 뒷정리 할 게 없어야 스택을 해제할 수 있음
    // 갔다 와서 할 일을 함수 인자로 바꿔줘야 돼
    // acc 기본값 기능이 없다면.. undefined 에 더하려고 하니까 계속 undefined 가 될 거임
    // 인자와 상관없는 합계를 위한 값이 필요함
    // 합계를 위한 값이 필요하단 얘기는 합계 값을 초기화 시켜야한다?
    const _sum = (v, acc = 0) => v > 1 ? _sum(v - 1, acc + v) : acc + 1;
    const sum = v => _sum(v, 0);
    let result = sum(10);
    console.log("result: ", result);
}

if (1) {
    console.log("=== 꼬리물기 최적화 재귀를 for문으로 ===")
    // 꼬리물기 최적화가 되어 있는 재귀는 for문으로 변환할 수 있다
    const v = 10;
    let acc = 0;
    for (let i = v; i > 1; i--) {
        acc += i;
    }
    acc += 1;
    console.log("acc: ", acc);
}

/**
 * 1주차 과제
 * 1차원 배열의 합 재귀 => 꼬리물기 최적화 재귀 -> 번역한 for
 * [1, 2, 3, 4, 5, 6, 7, ...]
 */

const array1To20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const array1To10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = array1To20;
if (1) {
    console.log("=== 배열의 합 구하기 관음의 for ===");
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        result += number;
    }
    console.log("result: ", result);
}

if (1) {
    console.log("====== 1주차 과제 ======");
    console.log("=== 재귀를 활용한 배열 요소의 합 ===")
    let acc = 0;
    // 0~8 + 9
    // 0~7 + 8 + 9
    // 0~6 + 7 + 8 + 9
    const _sum = (arr, index) => index > 0 ? arr[index] + _sum(arr, index - 1) : arr[0];
    const sum = arr => _sum(arr, arr.length - 1);
    let result = sum(array);
    console.log("result: ", result);
}

if (1) {
    console.log("=== 꼬리물기 최적화 재귀 ver ===");
    const _sum = (arr, index, acc) => index > 0 ? _sum(arr, index - 1, acc + arr[index]) : arr[0] + acc;
    const sum = arr => _sum(arr, arr.length - 1, 0);
    let result = sum(array);
    console.log("result: ", result);
}

if (1) {
    console.log("=== 꼬리물기 최적화 재귀를 for 문으로 ===");
    const arr = array;
    const index = arr.length - 1;
    let acc = 0;
    for (let i = index; i > 0; i--) {
        acc += arr[i];
    }
    acc += arr[0];
    console.log("acc: ", acc);
}