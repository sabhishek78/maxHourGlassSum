function maxHourGlassSum(arr){
let col=arr[0].length;
let row=arr.length;
console.log("row="+row);
console.log("col="+col);
let harr=[];
for(let i=0;i<row-3;i++){
  for(let j=0;j<col-3;j++){
    harr.push(getHourGlassCount(i,j,arr));
}
}
console.log("harr="+harr);
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