// hamesha array ko filter kiya jata hai.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.filter((item) => {
    console.log(item);
})

// hum iss k andr logical operators ko bhi use kr skty hain. yani k condition wagera.

let result = arr.filter((item2) => {
    return item2 <= 4;
})
console.log(result);