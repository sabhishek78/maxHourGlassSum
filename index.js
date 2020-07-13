// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

// Task
// Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.
function maxHourGlassSum(arr){
let col=arr[0].length;
let row=arr.length;
let harr=[];
for(let i=0;i<row-3;i++){
  for(let j=0;j<col-3;j++){
    harr.push(getHourGlassCount(i,j,arr));
}
}

return Math.max(...harr);

}
function getHourGlassCount(startRow,startCol,arr){
  let sum=0;
  for(let j=startCol;j<startCol+3;j++){
    sum+=arr[startRow][j];
  }
  sum+=arr[startRow+1][startCol+1];
  for(let j=startCol;j<startCol+3;j++){
    sum+=arr[startRow+2][j];
  }
  return sum;
}
console.log(maxHourGlassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]));