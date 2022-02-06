function timeConversion(s) {
    // Write your code here
    let  time=s.substr(0,2)
    let timeC
    let newStr;
    const n=s.length
  
    if(s.substr(n-2,n)!=='AM'  && time !=='12'){
      timeC =parseInt(time)+12;
       timeC==24 ? timeC==0 : timeC
      console.log(timeC)
      newStr= s.replace(time,timeC).slice(0,n-2)
      console.log()
     
    }else if(s.substr(n-2,n)=='AM' && time==12){
        newStr= s.replace(time,'00').slice(0,n-2)
    }
    else{
        newStr=s.slice(0,n-2) 
    }
   
    
     console.log(newStr)


}

timeConversion('12:40:22AM')