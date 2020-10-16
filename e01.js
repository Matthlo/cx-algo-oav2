function exchange(arr, first_Index, second_Index){
    let first = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = first;
}

function bubbleSorting(arr){

    let lenght = arr.length,
        i, m, stop;

    for (i=0; i < lenght; i++){
        for (m=0, stop=lenght-i; m < stop; m++){
            if (arr[m] > arr[m+1]){
                exchange(arr, m, m+1);
            }
        }
    }

    return arr;
}
console.log(bubbleSorting([39, -1.5, 287, 5, -1, 41, 1]));
