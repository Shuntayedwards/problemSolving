let a = [1,2,3,4];
export function reverseArray(a) {
    let reversenumbers = '';
    if(a === null){
        return '';
    }
    for(let i= a.length; i>=0; i--){
       reversenumbers += a[i]+=' '
}
    return reversenumbers
}
console.log(reverseArray(a));
