//soal 1
let arr1 = [1, 2, 3, 4, 5];

function reverse(arr) {
  let panjangArr = arr1.length - 1;
  let reversedArr = [];
  for (i = panjangArr; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

let reverseArr = reverse(arr1);

console.log(arr1);
console.log(reverseArr)

//soal 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function avgArr(arr) {
  let tempAvg = 0;

  let oversizedArr = [];
  for (i = 0; i < arr.length; i++) {
    tempAvg = tempAvg + arr[i];
  }

  tempAvg = tempAvg / arr.length;

  for (i = 0; i < arr.length; i++) {
    
    if (arr[i] > tempAvg) {
      oversizedArr.push(arr[i]);
    } else {
      continue;
    }
  }
  console.log(tempAvg);
  console.log(oversizedArr);
  return oversizedArr.length;
}
console.log(avgArr(arr1));
console.log(avgArr(arr2));

//soal 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) { 
      let onedimension = []
      for (i = 0; i < arr.length; i++){
          for (a = 0; a < arr[i].length; a++ ){
              onedimension.push(arr[i][a])
          }
      }
      for (x = 0 ; x < onedimension.length; x++){
          if (onedimension[x] == num){
              return x;
          } else{
              continue
          }
      }
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  