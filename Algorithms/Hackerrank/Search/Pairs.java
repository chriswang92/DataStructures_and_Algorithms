package Algorithms.HackerrankQuestions.Search;

import java.util.*;

public class Pairs {
    public static int pairs(int k, List<Integer> arr) {
        int count = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i =0;i<arr.size();i++){
            if(map.containsKey(arr.get(i) - k)) {
                count++;
            }
            if(map.containsKey(arr.get(i) + k)) {
                count++;
            }
            map.put(arr.get(i), i);
        }
        return count;
    }
        
    public static void main(String[] args) {
        System.out.println(pairs(1, Arrays.asList(1, 2, 3, 4)));
        System.out.println(pairs(2, Arrays.asList(1, 5, 3, 4, 2)));
    }
}
