package java8;

import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.*;

/**
 * Java 8 Stream API examples
 * Introduced in Java 8, the Stream API is used to process collections of objects. A stream is a sequence of objects that supports various methods which can be pipelined to produce the desired result.
The features of Java stream are –

    1. A stream is not a data structure instead it takes input from the Collections, Arrays or I/O channels.
    2. Streams don’t change the original data structure, they only provide the result as per the pipelined methods.
    3. Each intermediate operation is lazily executed and returns a stream as a result, hence various intermediate operations can be pipelined. Terminal operations mark the end of the stream and return the result.
 */
public class Stream {
    public static void main(String[] args) {
        // Difference between Intermediate Operations and Terminal Operations:
        // Intermediate Operations: map, filter, sorted
        /**
         * map: The map method is used to returns a stream consisting of the results of applying the given function to the elements of this stream.
         */
        List<Integer> number = Arrays.asList(2,3,4,5);
        List<Integer> square = number.stream().map(x -> x*x).collect(Collectors.toList());
        System.out.println(number + ", " + square);
        /**
         * filter: The filter method is used to select elements as per the Predicate passed as argument.
         */
        List<String> names = Arrays.asList("Reflection","Collection","Stream");
        List<String> filteredNames = names.stream().filter(s->s.startsWith("S")).collect(Collectors.toList());
        System.out.println(names + ", " + filteredNames);
        /**
         * sorted: The sorted method is used to sort the stream.
         */
        List<String> sortedNames = names.stream().sorted().collect(Collectors.toList());
        System.out.println(names + ", " + sortedNames);
        number = Arrays.asList(5,7,2,3,1);
        List<Integer> ascendingSortedNumbers = number.stream().sorted().collect(Collectors.toList());
        List<Integer> ascendingSortedNumbers2 = number.stream().sorted((a,b)->a-b).collect(Collectors.toList());
        List<Integer> descendingSortedNumbers = number.stream().sorted((a,b)-> b - a).collect(Collectors.toList());
        System.out.println(number + ", " + ascendingSortedNumbers + ", " + ascendingSortedNumbers2 + ", " + descendingSortedNumbers);

        // Terminal Operations: collect, forEach, reduce
        /**
         * collect: The collect method is used to return the result of the intermediate operations performed on the stream.
         */
        number = Arrays.asList(2,3,4,5,3);
        Set<Integer> squareSet = number.stream().map(x->x*x).collect(Collectors.toSet());
        System.out.println(number + ", " + squareSet);
        /**
         * forEach: The forEach method is used to iterate through every element of the stream.
         */
        number.stream().map(x -> x*x).forEach(x->System.out.println(x));
        /**
         * reduce: The reduce method is used to reduce the elements of a stream to a single value.
         * The reduce method takes a BinaryOperator as a parameter.
         */
        int evenSum = number.stream().filter(x->x%2==0).reduce(0, (accumulated, current) -> {
            System.out.println(accumulated + "," + current);
            return accumulated + current; 
        });
        System.out.println("reduced: " + evenSum);
        /**
         * Important Points/Observations:

            A stream consists of source followed by zero or more intermediate methods combined together (pipelined) and a terminal method to process the objects obtained from the source as per the methods described.
            Stream is used to compute elements as per the pipelined methods without altering the original value of the object.
         */
    }
}
