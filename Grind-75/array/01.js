/**
 * Link: https://leetcode.com/problems/two-sum/
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const targetElement = target - element;
    if (hashMap[targetElement] !== undefined) {
      return [hashMap[targetElement], index];
    }
    hashMap[element] = index;
  }
};
