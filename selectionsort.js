console.log("Bubble Sort");
var array = [23,12,45,22,45,21,24,67,43];
console.log("By Default Array : ");
console.log(array);
var n = array.length;


for(let i=0;i<n-1;i++){
    let min = i;

    for(let j=i+1;j<n;j++){
        if(array[min] > array[j]){
            min = j;
        }
    }
if(min != i){
    [array[i],array[min]] = [array[min],array[i]];
}

}

console.log("Sorted Array : ");
console.log(array);