//https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
function whatFlavors(cost, money) {
    let map = new Map();
    for (let i = 0; i < cost.length; i++) {
        const complement = money - cost[i];
        if (map.has(complement) && map.get(complement) != i) {
            const res =
                i + 1 <= map.get(complement) + 1
                    ? i + 1 + ' ' + (map.get(complement) + 1)
                    : map.get(complement) + 1 + ' ' + (i + 1);
            console.log(res);
            break;
        }
        map.set(cost[i], i);
    }
}

whatFlavors([1, 4, 5, 3, 2], 4);
whatFlavors([2, 2, 4, 3], 4);
