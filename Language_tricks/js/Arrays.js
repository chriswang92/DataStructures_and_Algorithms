// 3 ways to remove array duplicates:
const arr = ['a', 1, 'a', 1, 'bb', 2, 'bb', 2];
// set, the fasted!!
const distinctArr = [...new Set(arr)];
console.log(arr, distinctArr);
// filter + indexOf, arr.indexOf(item) will return the index of the first occurence of the item
const distinctArr2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arr, distinctArr2);

// reduce
const distinctArr3 = arr.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
);
console.log(arr, distinctArr3);

/**
 * Some notes:!!!
 * js array.sort: The sort() method sorts the elements of an array in place and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 *
 *  */

// for ... in ...: iterate over all enumerable properties
for (const index in arr) {
    console.log(index);
}
// for ... of ...: The for...of statement creates a loop iterating over iterable objects
for (const val of arr) {
    console.log(val);
}
