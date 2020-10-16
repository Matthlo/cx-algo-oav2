function exchange(arr, first_Index, second_Index){
    let first = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = first;
}

function selectionSort(arr){

    var len = arr.length,
        min;

    for (i=0; i < len; i++){
        min = i;
        for (m=i+1; m < len; m++){
            if (arr[m] < arr[min]){
                min = m;

            }
        }

        if (i != min){
            exchange(arr, i, min);
        }
    }

    return arr;
}
console.log(selectionSort([39, -1.5, 287, 5, -1, 41, 1]));