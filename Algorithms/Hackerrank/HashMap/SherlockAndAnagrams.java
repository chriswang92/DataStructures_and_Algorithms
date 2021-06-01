package Algorithms.Hackerrank.HashMap;

//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

import java.util.*;
import java.util.Map.Entry;

public class SherlockAndAnagrams {

    static Map<Character, Integer> getCharMap(String curr) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i=0;i<curr.length();i++) {
            char currChar = curr.charAt(i);
            if (map.containsKey(currChar)) {
                map.put(currChar, map.get(currChar)+1);
            } else {
                map.put(currChar, 1);
            }
        }
        return map;
    }
    static boolean checkMaps(String s, int start, int end, int after) {
        boolean result = true;
        String currSubStr = s.substring(start, start+end), currSubStr2 = s.substring(after, after+end);
        Map<Character, Integer> map1 = getCharMap(currSubStr);
        Map<Character, Integer> map2 = getCharMap(currSubStr2);
        for (Entry<Character, Integer> entry : map1.entrySet()) {
            if(!map2.containsKey(entry.getKey()) | entry.getValue()!=map2.get(entry.getKey())) {
                result = false;
            }
        }
        System.out.println(currSubStr+","+currSubStr2+","+result);
        return result;
    }
    
    public static int sherlockAndAnagrams(String s) {
        int count=0;
         for(int start=0;start<s.length();start++){
             for(int end=1;end<s.length();end++){
                for(int after=start+1; after<=s.length()-end;after++){
                    boolean result = checkMaps(s, start,end,after);
                    if(result) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(sherlockAndAnagrams("ifailuhkqq"));
    }
}