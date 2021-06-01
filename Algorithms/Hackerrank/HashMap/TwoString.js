//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function twoStrings(s1, s2) {
    let result = false;
    const map1 = new Map(),
        map2 = new Map();
    [...s1].forEach(char => {
        if (map1.has(char)) {
            map1.set(char, map1.get(char) + 1);
        } else {
            map1.set(char, 1);
        }
    });
    [...s2].forEach(char => {
        if (map2.has(char)) {
            map2.set(char, map2.get(char) + 1);
        } else {
            map2.set(char, 1);
        }
    });
    [...s1].forEach(char => {
        if (map1.has(char) && map2.has(char)) result = true;
    });
    return result ? 'YES' : 'NO';
}

console.log(twoStrings('hi', 'world'));
