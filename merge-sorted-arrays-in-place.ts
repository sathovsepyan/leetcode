function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p = m + n - 1;

    let i = m - 1;
    let j = n - 1;

    while (p >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[p] = nums1[i];
            i--;
        } else if (j >= 0) {
            nums1[p] = nums2[j];
            j--;
        }
        p--;
    }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1)