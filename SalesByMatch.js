function sockMerchant(n, ar) {
    // Write your code here
    // figure out the same number oof item in array.
    let pairsCount=0
    let matchObj={}
    
    ar.forEach((value)=>{
            if(matchObj[value]){
               matchObj[value] = matchObj[value]+1  
            }else{
                 matchObj[value]=1
            }
            if(matchObj[value]==2){
                pairsCount +=1
                matchObj[value]=0
            }
    },{})
    console.log(pairsCount,matchObj)

}

sockMerchant(7,[1,2,1,3,1,2])

