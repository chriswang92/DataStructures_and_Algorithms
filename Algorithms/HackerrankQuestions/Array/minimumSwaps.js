//https://www.hackerrank.com/challenges/minimum-swaps-2/problem


function minimumSwaps(arr) {
    let swaps = 0;
    for(let i=0;i<arr.length;i++){
        let valShouldBe = i+1;
        if (arr[i] !== valShouldBe) {
            for (let j=i;j<arr.length;j++){
                if(arr[j]===valShouldBe) {
                    //swap i and j
                    let temp = arr[j]
                    arr[j]=arr[i]
                    arr[i]=temp
                }
            }
            swaps++;
        }
    }
    return swaps;
}

console.log(minimumSwaps([7,1,3,2,4,5,6]));
console.log(minimumSwaps([4,3,1,2]));
console.log(minimumSwaps([2,3,4,1,5]));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
