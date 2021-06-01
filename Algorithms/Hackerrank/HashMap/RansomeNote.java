package Algorithms.Hackerrank.HashMap;

import java.util.*;

//https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
class RansomeNote {

    public static void checkMagazine(List<String> magazine, List<String> note) {
        boolean result = true;
        // Write your code here
        Map<String, Integer> mmap = new HashMap<>();
        Map<String, Integer> nmap = new HashMap<>();
        for (String word : magazine) {
            if(mmap.containsKey(word)){
                mmap.put(word, mmap.get(word)+1);
            }else{
                mmap.put(word,1);
            }
        }
        for (String word : note) {
            if(nmap.containsKey(word)){
                nmap.put(word, nmap.get(word)+1);
            }else{
                nmap.put(word,1);
            }
        }
        for (String word : note) {
            if(!mmap.containsKey(word) || mmap.get(word) < nmap.get(word)) result = false;
        }
        System.out.println(result ? "Yes":"No");
    }
}