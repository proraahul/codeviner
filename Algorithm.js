
function twoSum(num, target) {
  const numIndices = {};

  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];  //[7,2,-2,-6]

    // If the complement exists in our numIndices object, we found a solution.
    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }

    // store the current number and its index in the numIndices object.
    numIndices[num[i]] = i; 
  }

  // If no solution is found, return an empty array 
  return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // This will output [0, 1] because nums[0] + nums[1] equals 9.
