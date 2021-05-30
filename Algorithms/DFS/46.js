//46
const permute = function (nums) {
    return DFS(nums);
}
const DFS = function (nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, j) => j !== i);
    set.push(nums[i]);
    DFS(newNums, set, answers);
    set.pop();
  }
  return answers;
};

const input = [1, 2, 3];
console.log(permute(input));
