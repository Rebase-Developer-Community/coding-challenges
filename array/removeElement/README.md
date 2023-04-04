# 27. Remove Element
## Problem Solution
### `Easy`
---

Given an integer array of nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums that are not equal to val.

Consider the number of elements in nums that are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain elements that are not equal to val. The remaining elements of nums and the size of nums are not necessary.
- Return k.

---

### Example 1:
```
Input: nums = [3,2,2,3], val = 3

Output: 2, nums = [2,2,_,_]

Explanation: Your function should return k = 2, with the first two elements of nums being 2.
What you leave does not matter beyond the returned k (hence they are underscores).
```
### Example 2:

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2

Output: 5, nums = [0,1,4,0,3,_,_,_]

Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
What you leave does not matter beyond the returned k (hence they are underscores).
```
---


### Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100
