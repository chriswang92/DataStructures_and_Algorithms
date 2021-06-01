// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
function freqQuery(queries) {
    const result = [];
    const map = {};
    const freq = {};
    for (var q of queries) {
        const op = q[0],
            currNumber = q[1];
        const currFreq = map[currNumber] || 0;
        switch (op) {
            case 1:
                // update map
                map[currNumber] = currFreq + 1;
                // update freq
                if (currFreq > 0) {
                    freq[currFreq] = freq[currFreq] - 1;
                }
                const newFreq = currFreq + 1;
                freq[newFreq] = (freq[newFreq] || 0) + 1;
                break;
            case 2:
                if (currFreq > 0) {
                    // update map
                    map[currNumber] = currFreq - 1;
                    // update freq
                    freq[currFreq] = freq[currFreq] - 1;
                    if (currFreq - 1 > 0) {
                        freq[currFreq - 1] = (freq[currFreq - 1] || 0) + 1;
                    }
                }
                break;
            case 3:
                result.push(!!freq[currNumber] && freq[currNumber] > 0 ? 1 : 0);
                break;
            default:
                break;
        }
    }
    return result;
}
const arr = [];
arr.push(
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2]
);
console.log(arr);
console.log(freqQuery(arr));
