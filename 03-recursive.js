// soal 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray( arr) { 
    if (arr.length === 1) {
        return arr[0]
    } 

    let temp = arr.slice();

    temp.pop()

    return arr[arr.length-1] + sumOfArray(temp)

}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


// soal 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

const avg1 = 3;
const avg2 = 6;
function countAboveAvg( arr, number ) { 
    if (arr[arr.length-1] >= number){
        let temp = arr.slice();
        temp.pop()
        if (arr.length === 1){
            return null
        } else{
            let x = 1
            return x += countAboveAvg(temp, number)
        }
    }

   

    
 }

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// soal 3
const arr = [1, 2, 3, 4, 5];
function searchInArray( arr, num ) { 
    if (arr[arr.length - 1] === num){
        return console.log(`Angka ditemukan pada index : ${arr.length-1}`);
    }

    else if (arr.length === 1){
        return console.log("angka tidak ditemukan");
    }
    
    arr.pop()
    return searchInArray(arr,num)
 }

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);


// soal 4
function trianglePattern(x, y) {
    if (x == 0) {
        return;
    }
    let spasi = "";

    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            spasi += " "

        }

        else {
            spasi += String.fromCharCode(64 + (y - x + (i - x) + 2))
        }
    }

    console.log(spasi);
    trianglePattern(x - 1, y)
}

trianglePattern(5, 5);