function diagonalDifference(arr) {
    // Write your code here
   let s1=0;
   let s2=0;
   let n=arr.length

   for(let i=0; i<n ; i++){
       s1 += arr[i][i]
       s2 += arr[i][n-i-1]
       console.log(s1,s2)
   }

   return Math.abs(s1-s2)

}

const b=[[1, 2, 3,6],
[4, 5, 6,4],
[9, 8, 9,7],
[9, 8, 9,7] ] 

console.log(diagonalDifference(b))