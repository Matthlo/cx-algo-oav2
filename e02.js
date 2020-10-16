function insertionSort(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        carte = arr[i];
        p = i - 1;
        while (p >= 0 && arr[p] > carte) {
            arr[p + 1] = arr[p]
            p--;
        }
        arr[p + 1] = carte;
    }
    return arr;
}
console.log(insertionSort([39, -1.5, 287, 5, -1, 41, 1]));