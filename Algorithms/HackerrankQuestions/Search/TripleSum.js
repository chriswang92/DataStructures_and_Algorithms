//https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
function triplets(a, b, c) {
    const $ = arr => [...new Set(arr)].sort((a, b) => a - b);
    (a = $(a)), (b = $(b)), (c = $(c));
    // var is function scope, let is block scope, so put let below to declare count will not work
    for (var i = 0, j = 0, k = 0, count = 0; j < b.length; j++) {
        while (a[i] <= b[j]) i++;
        while (c[k] <= b[j]) k++;
        count += i * k;
    }
    return count;
}
function triplets2(a, b, c) {
    // sort a,b,c
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    c.sort((a, b) => a - b);
    // get distinct a,b,c
    a = [...new Set(a)];
    b = [...new Set(b)];
    c = [...new Set(c)];
    let indexA = 0,
        indexB = 0,
        indexC = 0;
    let count = 0;
    while (indexB < b.length) {
        while (indexA < a.length && a[indexA] <= b[indexB]) {
            indexA++;
        }
        while (indexC < c.length && c[indexC] <= b[indexB]) {
            indexC++;
        }
        count += indexA * indexC;
        indexB++;
    }
    return count;
}

console.log(triplets([1, 3, 5], [2, 3], [1, 2, 3]));
console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]));
