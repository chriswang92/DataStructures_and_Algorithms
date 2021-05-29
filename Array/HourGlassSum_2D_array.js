
//https://www.hackerrank.com/challenges/2d-array/problem

const isValid = (x, y) => x >= 0 && x < 6 && y >= 0 && y < 6;
const calculateHourGlassSum = (arr, i, j) => {
    let sum = 0;
    // 1st row
    if (isValid(i, j)) sum += arr[i][j];
    if (isValid(i, j + 1)) sum += arr[i][j + 1];
    if (isValid(i, j + 2)) sum += arr[i][j + 2];
    // 2nd row
    if (isValid(i + 1, j + 1)) sum += arr[i + 1][j + 1];
    // 3rd row
    if (isValid(i + 2, j)) sum += arr[i + 2][j];
    if (isValid(i + 2, j + 1)) sum += arr[i + 2][j + 1];
    if (isValid(i + 2, j + 2)) sum += arr[i + 2][j + 2];
    return sum;
};

function hourglassSum(arr) {
    let max = -63;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (
                isValid(i, j) &&
                isValid(i, j + 2) &&
                isValid(i + 2, j) &&
                isValid(i + 2, j + 2)
            ) {
                const sum = calculateHourGlassSum(arr, i, j);
                if (sum > max) max = sum;
            }
        }
    }
    console.log(max);
    return max;
}

const input = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(input))
