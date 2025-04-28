console.log("Bubble Sort");
var array = [23,12,45,22,45,21,24,67,43];
console.log("By Default Array : ");
console.log(array);
var n = array.length;


for(var i=1;i<n;i++){
    var key = array[i];
    var j = i-1;

    while(j>=0 && array[j] > key){
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = key;
}

console.log("Sorted Array : "+array);