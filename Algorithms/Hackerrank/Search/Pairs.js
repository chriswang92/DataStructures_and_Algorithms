//https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
function pairs(k, arr) {
    let count = 0;
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i] - k)) {
            count++;
        }
        if (map.has(arr[i] + k)) {
            count++;
        }
        map.set(arr[i], i);
    }
    console.log(count);
    return count;
}

(() => {
    pairs(1, [1, 2, 3, 4]);
    pairs(2, [1, 5, 3, 4, 2]);
})();
