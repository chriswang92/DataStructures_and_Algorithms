package Algorithms.HackerrankQuestions.Search;

import java.util.*;

class Result {

    public static void whatFlavors(List<Integer> cost, int money) {
    // Write your code here
        Map<Integer, Integer> map = new HashMap<>();
        for (Integer i = 0; i < cost.size(); i++) {
            int complement = money - cost.get(i);
            if (map.containsKey(complement) && map.get(complement) != i) {
                int complementIndex = map.get(complement) + 1;
                int currentIndex = i + 1;
                String result = complementIndex <= i ? complementIndex + " " + currentIndex : currentIndex + " " + complementIndex;
                System.out.println(result);
                break;
            }
            map.put(cost.get(i), i);
        }
    }
    public static void main(String args[]) {
        whatFlavors(Arrays.asList(new Integer[]{1,4,5,3,2}), 4);
        whatFlavors(Arrays.asList(new Integer[]{2, 2, 4, 3}), 4);
    }
}
