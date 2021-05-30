//https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
package Algorithms.HackerrankQuestions.Search;

import java.util.*;

public class TripleSum {
  // Solution:
  static long triplets(int[] a, int[] b, int[] c) {
        Arrays.sort(a);
        a=Arrays.stream(a).distinct().toArray();
        Arrays.sort(b);
        b=Arrays.stream(b).distinct().toArray();
        Arrays.sort(c);
        c=Arrays.stream(c).distinct().toArray();
        int indexA=0,indexB=0,indexC=0;
        long count=0;
        while(indexB<b.length) {
            while(indexA<a.length && a[indexA] <= b[indexB])
                indexA++;
            while(indexC<c.length && c[indexC] <= b[indexB])
                indexC++;
            // convert indexes to long to prevent runtime error
            count+=(long)indexA*(long)indexC;
            indexB++;
        }
        return count;
    }
    public static void main(String[] args) {
        int[] a = new int[]{3,5,7};
        int b[] = new int[]{3,6};
        int[] c = new int[]{4,6,9};
        System.out.println(triplets(a,b,c));
         a = new int[]{1,4,5};
         b = new int[]{2,3,3};
         c = new int[]{1,2,3};
        System.out.println(triplets(a,b,c));
    }
}
