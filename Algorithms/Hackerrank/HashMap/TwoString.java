package Algorithms.Hackerrank.HashMap;

//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

import java.util.*;

public class TwoString {
    public static String twoStrings(String s1, String s2) {
        boolean result = false;
        Map<Character, Integer> map1 = new HashMap<>();
        Map<Character, Integer> map2 = new HashMap<>();
        for(int i=0;i<s1.length();i++){
            char curr = s1.charAt(i);
            if(map1.containsKey(curr)){
                map1.put(curr, map1.get(curr)+1);
            }else{
                map1.put(curr,1);
            }
        };
        for(int i=0;i<s2.length();i++){
            char curr = s2.charAt(i);
            if(map2.containsKey(curr)){
                map2.put(curr, map2.get(curr)+1);
            }else{
                map2.put(curr,1);
            }
        };
        // System.out.println(map1.toString());
        // System.out.println(map2.toString());
        // Write your code here
        for(int i=0;i<s1.length();i++){
            char curr = s1.charAt(i);
            if(map1.containsKey(curr)&&map2.containsKey(curr)) result = true;
        }
        return result?"YES":"NO";
    }
    public static void main(String[] args) {
        System.out.println(twoStrings("hello", "world"));
        System.out.println(twoStrings("hi", "world"));
        System.out.println(twoStrings("hackerrankcommunity", "cdecdecdecde"));
    }
}
