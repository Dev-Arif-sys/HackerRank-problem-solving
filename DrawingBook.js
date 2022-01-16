function pageCount(n, p) {
    // Write your code here
    const fromF=Math.floor(p/2)
    const fromL=Math.floor((n)/2)-fromF

    const result= Math.min(fromF,fromL)
    console.log(result)
   
    


}

pageCount(10,7)