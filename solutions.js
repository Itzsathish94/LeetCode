//////TWO SUM/////////////////////////////////no:1////////////////////////////////////////////////TC:O(n2)///////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i = 0 ; i < nums.length-1 ; i++){
//         for(let j = i+1; j < nums.length;j++){
//             if(nums[i]+nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Best time to buy and sell stock /////////////////////////////////no:121////////////////////////////////////////////////TC:O(n)///////////////////////////////////////////////

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for(let i = 0 ; i < prices.length ; i++){
//         minPrice = Math.min(minPrice,prices[i]);
//         maxProfit = Math.max(maxProfit,prices[i]-minPrice)
//     }

//     return maxProfit;
// };  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Remove Duplicates from Sorted Array/////////////////////////////////no:26////////////////////////////////////////////////TC:O(n)///////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let k=1;
//     for(let i = 1; i<nums.length;i++){
//         if(nums[i]!==nums[i-1]){
//             nums[k] = nums[i]
//             k++
//         }
//     } 
//     return k;
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////Rotate Array/////////////////////////////////no:189////////////////////////////////////////////////TC:O(n)///////////////////////////////////////////////

// /**
// //  * @param {number[]} nums
// //  * @param {number} k
// //  * @return {void} Do not return anything, modify nums in-place instead.
// //  */
// var rotate = function(nums, k) {
//     k = k % nums.length;
//    nums.splice(0,0,...nums.splice(-k,k));
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////Find All Numbers Disappeared in an Array/////////////////////////////////no:448////////////////////////////////////////////////TC:O(n)///////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDisappearedNumbers = function(nums) {
//     let num = new Set(nums);
//     let result = [];
//     for(let i=1;i<=nums.length;i++){
//      if(!num.has(i)){
//          result.push(i)
//      }
//     }
//     return result;
//  };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Move zeroes/////////////////////////////////no:283////////////////////////////////////////////////TC:O(n)///////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     let insertPos = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             nums[insertPos] = nums[i];
//             insertPos++
//         }
//     }
//     for(let i = insertPos ; i < nums.length ; i++){
//         nums[i] = 0;
//     }
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Intersection of Two Arrays II/////////////////////////////////no:350////////////////////////////////////////////////TC///////////////////////////////////////////////

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {
//     let map = new Map();
//     let result = [];

//     for(let num of nums1){
//         map.set(num,(map.get(num)||0)+1);
//     }

//     for(let num of nums2){
//         if(map.get(num)>0){
//             result.push(num)
//         }
//         map.set(num,map.get(num)-1);
//     }
//     return result;
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Valid Anagram/////////////////////////////////no:242////////////////////////////////////////////////TC///////////////////////////////////////////////

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join() === t.split('').sort().join()
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Reverse string/////////////////////////////////no:344////////////////////////////////////////////////TC///////////////////////////////////////////////
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function(s) {
//     let left = 0;
//     let right = s.length-1;
//     while(left<=right){
//         [s[left],s[right]] = [s[right],s[left]]
//         left++
//         right--
//     }
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Find the Index of the First Occurrence in a String/////////////////////////////////no:28////////////////////////////////////////////////TC///////////////////////////////////////////////
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle) 
//  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Longest Common Prefix/////////////////////////////////no:14////////////////////////////////////////////////TC///////////////////////////////////////////////
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let check = strs[0];
//     for(let i=1;i<=strs.length-1;i++){
//         for(let j=check.length-1;j>=0;j--){
//             if(check[j]!=strs[i][j]){
//                 check = check.slice(0,j)
//             }
//         }
//     }
//     return check;
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Valid Palindrome/////////////////////////////////no:125////////////////////////////////////////////////TC///////////////////////////////////////////////
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     s=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//     let left = 0;
//     let right = s.length-1;
//     while(left<=right){
//         if(s[left]===s[right]){
//             left++
//             right--
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////Repeated Substring Pattern/////////////////////////////////no:459////////////////////////////////////////////////TC///////////////////////////////////////////////
// /**
// //  * @param {string} s
// //  * @return {boolean}
// //  */
// var repeatedSubstringPattern = function(s) {
//     let c=s+s
//    console.log(c)
//    let cc=c.slice(1,c.length-1)
//    console.log(cc)
//    return cc.includes(s)
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
