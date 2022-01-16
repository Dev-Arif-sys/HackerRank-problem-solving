function bonAppetit(bill, k, b) {
    // Write your code here
    // sum the bill with k index value.
    const sum= bill.reduce((prev,curr)=>prev + curr,0)
    const halfBill=(sum-bill[k])/2
    if((b-halfBill)<=0){
        console.log('Bon Appetit')
    }else{
        console.log(b-halfBill)
    }

}

bonAppetit([9,9,3,4],1,3)