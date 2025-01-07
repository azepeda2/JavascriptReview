function FindNonDuplicates(arr) {
    let nextNonDuplicate = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[nextNonDuplicate - 1] != arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate++;
        }
    }

    return nextNonDuplicate; // count
}

let arr = [2, 3, 3, 3, 6, 9, 9];
let nonDupes = FindNonDuplicates(arr);
console.log(nonDupes);

arr = [2, 2, 2, 11];
nonDupes = FindNonDuplicates(arr);
console.log(nonDupes);