
function addMultiSub(n1, n2, n3, n4){
    return (n1 + n2) * n3 - n4;
}
console.log(addMultiSub(1, 2, 3, 4));
console.log('-----------------------------------------')

const addMultiSub2 = (n1, n2, n3, n4) => (n1 + n2) * n3 - n4;
console.log(addMultiSub2(1, 2, 3, 4));
console.log('-----------------------------------------')

function addMultiSub3(n1){
    return function(n2){
        return function(n3){
            return function(n4){
                return (n1 + n2) * n3 - n4;
            }
        }
    }
}
console.log(addMultiSub3(2)(3)(4)(5));

const addMultiSub4 = n1 => n2 => n3 => n4 => (n1 + n2) * n3 - n4;
console.log(addMultiSub4(2)(3)(4)(5));
console.log('-----------------------------------------')


