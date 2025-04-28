console.log("Linear Search");
var array = [23,12,45,22,45,21,24,67,43];
console.log("By Default Array : ");
console.log(array);

console.log("Status : "+linearSearch(45));

function linearSearch(target){
    for(var i = 0;i<array.length;i++){
        if(array[i] == 45){
            return i+1;
        }
}
}