// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let mi = 0;
    for (let i = 0; i < m + n && mi < n; i++) {
        if (nums2[mi] < nums1[i] || i - mi >= m) {
            nums1.splice(i, 0, nums2[mi]);
            mi++;
        }
    }

    nums1.splice(n + m, n)
};