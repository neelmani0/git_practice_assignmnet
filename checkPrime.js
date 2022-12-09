function checkPrime(num) {
    let count = 0;
    for(let i = 2; i <= num; i++){
        if(num%i == 0){
            count++;
        }    
    }
    if(count == 1){
        return true;
    }else{
        return false;
    }
}
let n=13;
 let ans = checkPrime(n);
 
 if(ans == true){
   console.log(n,"  is a prime number");
   }
  else{
   console.log(n," is not a prime number");
  }
 
