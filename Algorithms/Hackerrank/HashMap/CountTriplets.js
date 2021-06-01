//https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/**
 * Couple of hints:

1.Can be done in O(n) -> single pass through data
2.No division necessary and single multiplications by R are all that's needed
3.Using map(C++) or dict(Java, Python) is a must -> can be unordered map (saves O(logN))
4.Try to think forward when reading a value -> will this value form part of a triplet later?
5.No need to consider (R == 1) as a corner case
 */
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
// console.log(factorial(5));
function countTriplets_wrong(arr, r) {
    var count = 0;
    const map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        if (r !== 1 && arr[i] % r === 0 && arr[i] % Math.pow(r, 2) === 0) {
            if (map.has(arr[i] / r) && map.has(arr[i] / Math.pow(r, 2))) {
                count += map.get(arr[i] / r) * map.get(arr[i] / Math.pow(r, 2));
            }
        }
        if (r === 1 && map.get(arr[i]) > 2) {
            const n = map.get(arr[i]);
            count += factorial(n) / (factorial(3) * factorial(n - 3));
        }
    }
    return count;
}
function countTriplets2(arr, r) {
    var count = 0;
    const doublets = new Map();
    const triplets = new Map();
    for (var k of arr) {
        console.log(k, triplets, doublets);
        if (triplets.has(k)) count += triplets.get(k);

        if (doublets.has(k)) {
            if (triplets.has(k * r)) {
                triplets.set(k * r, triplets.get(k * r) + doublets.get(k));
            } else {
                triplets.set(k * r, doublets.get(k));
            }
        }
        if (doublets.has(k * r)) {
            doublets.set(k * r, doublets.get(k * r) + 1);
        } else {
            doublets.set(k * r, 1);
        }
    }
    return count;
}
function countTriplets(arr, r) {
    var count = 0;
    const doublets = {};
    const triplets = {};
    for (var currentNumber of arr) {
        const nextNumber = currentNumber * r;
        // update count if there's triplet for current number 
        count += triplets[currentNumber] || 0;

        // update potential triplet count        
        triplets[nextNumber] = (triplets[nextNumber] || 0) + (doublets[currentNumber] || 0);
        // update potential doublets count
        doublets[nextNumber] = (doublets[nextNumber] || 0) + 1;
    }
    return count;
}

// console.log(countTriplets([1, 2, 2, 4], 2));
// console.log(countTriplets([1, 2, 2, 4], 1));
console.log(countTriplets([1, 5, 5, 25, 125], 5));
