https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(q) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < q.length; i++) {
        const currVal = q[i], originalPos = currVal - 1;
        let maxAdvancePos = originalPos - 2 > 0 ? originalPos - 2 : 0; 
        if (originalPos - i > 2) { chaotic = true }
        for (let j = maxAdvancePos; j < i; j++) {
            if (q[j] > currVal)  bribes++;
        }
    }
    console.log(!!chaotic?'Too chaotic':bribes);
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
