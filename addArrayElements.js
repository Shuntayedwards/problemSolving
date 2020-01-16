let ar = [1000, 2000, 3000, 4000];
export function aVeryBigSum(ar) {
    let sumOfNum = 0;
    for(let i=0; i<ar.length; i++){
        sumOfNum += ar[i]
    }
    return sumOfNum;   
}
console.log(aVeryBigSum(ar));
