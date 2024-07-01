if (1) {
    console.log("=== range sum ===")
    const _sum = (v, acc) => {
        return v > 1 ? _sum(v - 1, acc + v) : acc + 1;
    };
    const sum = v => _sum(v, 0);
    let result = sum(10);
    console.log("result: ", result);
}

/**
 * 1주차 과제
 * 1차원 배열의 합 재귀, 꼬리 재귀 -> 번역한 for
 * [1, 2, 3, 4, 5, 6, 7, ...]
 */

if (1) {
    console.log("=== array sum by for ===")
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    result = 0;
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        result += number;
    }
    console.log("result: ", result);
}

if (1) {
    console.log("=== array sum by recursive ===");
    // 0~8 + 9(마지막인덱스)
    // 0~7 + 8 + 9
    // 0~6 + 7 + 8 + 9
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let acc = 0;
    const sum = (array, acc) => {
        let newArray;
        if (array.length > 1) {
            const removedLastElement = array.splice(-1);
            acc += Number(removedLastElement);
            newArray = array;
            return sum(newArray, acc);
        } else {
            return acc + array[0];
        }
    }
    let result = sum(array, acc);
    console.log("result: ", result);
}

if (1) {
    console.log("=== array sum test ===");
    const array = [1, 2, 3, 4, 5];
    const removedElement = array.splice(-1); // 배열의 마지막 요소 제거
    const newArray = array; // 기존 배열에서 마지막 요소를 제거한 새로운 배열
    console.log("removedElement: ", removedElement);
    console.log("newArray: ", newArray);
}