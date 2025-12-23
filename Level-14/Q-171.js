function unique(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            continue;
        }
        else {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);

}

unique([1, 2, 2, 3, 3, 3]);
unique(["a", "a", "b"]);
unique([]);