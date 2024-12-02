/*
Now write another function fibsRec which solves the same problem (in fibonacci.js) recursively.
*/

function fibsRec (n) {
    if (n === 1){
        return [0];
    }
    else if (n === 2){
        return [0, 1];
    }
    else{
        let array = fibsRec(n - 1);
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array.slice(0, n);
    }
}

console.log(fibsRec(8));