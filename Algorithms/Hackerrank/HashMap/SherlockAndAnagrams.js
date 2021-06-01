//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMaps(s1, s2) {
    let matched = true;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (map1.has(s1.charAt(i))) {
            map1.set(s1.charAt(i), map1.get(s1.charAt(i)) + 1);
        } else {
            map1.set(s1.charAt(i), 1);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (map2.has(s2.charAt(i))) {
            map2.set(s2.charAt(i), map2.get(s2.charAt(i)) + 1);
        } else {
            map2.set(s2.charAt(i), 1);
        }
    }
    for (let [key, val] of map1) {
        if (!map2.has(key) || val !== map2.get(key)) {
            matched = false;
        }
    }
    return matched;
}
function sherlockAndAnagrams(s) {
    var count = 0;
    for (let start = 0; start < s.length; start++) {
        for (let end = 1; end < s.length; end++) {
            for (let after = start + 1; after <= s.length - end; after++) {
                if (
                    !!checkMaps(
                        s.substring(start, start + end),
                        s.substring(after, after + end)
                    )
                ) {
                    count++;
                }
            }
        }
    }
    return count;
}
sherlockAndAnagrams('ifailuhkqq');
