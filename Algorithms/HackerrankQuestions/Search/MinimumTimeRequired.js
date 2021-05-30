//https://www.hackerrank.com/challenges/minimum-time-required/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
// Solution: binary search based O(nLogN)
function minTime(machines, goal) {
    let fastest = Math.min(...machines);
    let slowest = Math.max(...machines);

    let lowerBound = Math.ceil(goal / machines.length) * fastest;
    let upperBound = Math.ceil(goal / machines.length) * slowest;

    while (lowerBound < upperBound) {
        // we are using binary search here, so always start at middle 
        let days = Math.floor((upperBound + lowerBound) / 2);
        // Math.floor(day / machine) is how many products are produced for such days
        let sum = machines.reduce(
            (xs, machine) => xs + Math.floor(days / machine),
            0
        );
        if (sum < goal) {
            lowerBound = days + 1;
        } else if (sum >= goal) {
            upperBound = days;
        }
    }

    return lowerBound;
}

console.log(minTime([2, 3], 5));
console.log(minTime([2, 3, 2], 10));
console.log(minTime([4, 4, 4], 10));
console.log(minTime([1, 3, 4], 10));
