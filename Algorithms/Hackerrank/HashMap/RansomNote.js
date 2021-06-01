//https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
    let result = true;
    const magazineMap = new Map();
    const noteMap = new Map();
    for (const word of magazine) {
        if (magazineMap.has(word)) {
            magazineMap.set(word, magazineMap.get(word) + 1);
        } else {
            magazineMap.set(word, 1);
        }
    }
    for (const word of note) {
        if (noteMap.has(word)) {
            noteMap.set(word, noteMap.get(word) + 1);
        } else {
            noteMap.set(word, 1);
        }
    }
    for (const [key, val] of noteMap) {
        // console.log(key, val)
        if (!magazineMap.has(key) || magazineMap.get(key) < noteMap.get(key)) result = false;
    }
    console.log(result ? 'Yes' : 'No');
}

const ms = 'two times three is not four';//'give me one grand today night';
const magazine = ms.split(' ');
const ns = 'two times two is four';//'give one grand today';
const note = ns.split(' ');
checkMagazine(magazine, note);
