function miniMaxSum(arr) {
    // Write your code here
   let newArr=arr.sort();
   let minSum=0;
   let maxSum=0;
   for(let i=0;i<4;i++){
       minSum+=newArr[i];
   }
    for(let i=1;i<5;i++){
       maxSum+=newArr[i];
   }
console.log(minSum,maxSum);

}