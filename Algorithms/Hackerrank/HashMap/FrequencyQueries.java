package Algorithms.Hackerrank.HashMap;
//https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen

import java.util.*;

public class FrequencyQueries {
    static List<Integer> freqQuery(List<int[]> queries) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>(); // map of {number: how many frequency it has}
        Map<Integer, Integer> freq = new HashMap<>(); // map of {frequency: how many numbers has this frequency}
        for (int[] currLine : queries) {
            Integer command = currLine[0];
            Integer currNumber = currLine[1];
            if (command == 1) {
                System.out.println("1"+map+","+ freq+","+ currNumber);
                // update map
                Integer currFreq = map.get(currNumber) == null ? 0 : map.get(currNumber);
                map.put(currNumber, currFreq + 1);
                
                // update freq
                if (currFreq > 0) {
                    freq.put(currFreq, freq.get(currFreq) - 1);
                }
                Integer newFreq = currFreq + 1;
                Integer newFreqCount = freq.get(currFreq + 1);
                freq.put(newFreq, newFreqCount == null ? 1 : newFreqCount + 1);
            }
            if (command == 2) {
                System.out.println("2"+map+","+ freq+","+ currNumber);
                Integer currFreq = map.get(currNumber);
                if (currFreq != null && currFreq > 0) {
                    // update map
                    map.put(currNumber, currFreq - 1);
                    // update freq
                    freq.put(currFreq, freq.get(currFreq) - 1);
                    if (currFreq - 1 > 0) {
                        freq.put(currFreq - 1, freq.get(currFreq-1) == null? 1 : freq.get(currFreq-1) +1);
                    }
                }
            }
            if (command == 3) {
                System.out.println("3"+map+","+ freq+","+ currNumber);
                boolean check = false;
                if (freq.containsKey(currNumber) && freq.get(currNumber) > 0) {
                    check = true;
                }
                System.out.println(check);
                result.add(check?1:0);
            }
        }
        return result;
    }
    public static void main(String[] args) {
        // List<List<Integer>> q = new ArrayList<>();
        List<int[]> q = new ArrayList<>();
        int[][] arr = {{1,5},{1,6},
        {3 ,2},
            {1, 10},
                {1 ,10},
        {1 ,6},
    {2 ,5},
        {3 ,2}};
        for (int[] line : arr) {
            // q.add(Arrays.asList(line));
            q.add(line);
        }
        System.out.println(q);
        System.out.println(freqQuery(q));
    }
}
