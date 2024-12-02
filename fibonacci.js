/*
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibs (n) {
    let array = [0];
    if (n === 2){
        array.push(1);
        return array;
    }
    else {
        array.push(1);
        for(i = 2; i < n; i++){
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

console.log(fibs(8));
console.log(fibs(2));
console.log(fibs(3));