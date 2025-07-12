function sumBase(n:number,k:number){//n=34 k=6
    let sum=0;
    while(n>0){
        sum += n % k; //
        n=Math.floor(n/k)
    }
    return sum
}

console.log(sumBase(68,4)) 


