// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
package Algorithms.Hackerrank.HashMap;

import java.util.*;

public class CountTriplets {
    static long countTriplets(List<Long> arr, long r) {
        long count = 0;
        Map<Long, Long> doubles = new HashMap<>();
        Map<Long, Long> triplets = new HashMap<>();
        for (Long curr : arr) {
            Long next = curr * r;
            System.out.println(triplets);
            count += (triplets.containsKey(curr) ? triplets.get(curr) : 0);

            triplets.put(next, ((triplets.containsKey(next) ? triplets.get(next) : 0) 
            + (doubles.containsKey(curr) ? doubles.get(curr) : 0)));

            doubles.put(next, doubles.containsKey(next) ? doubles.get(next) + 1: 1);
        }
        return count;
    }
    public static void main(String[] args) {
        List<Long> arr = Arrays.asList(new Long[]{1L,4L,16L,64L});
        System.out.println(CountTriplets.countTriplets(arr, 4));
    }
    
}
