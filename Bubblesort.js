console.log("Bubble Sort");
var array = [23,12,45,22,45,21,24,67,43];
console.log("By Default Array : ");
console.log(array);
var n = array.length
for(var i=0;i<n-1;i++){
    var flag = 0;
    for(var j=0;j<n-i-1;j++){
        if(array[j] > array[j+1]){
            [array[j],array[j+1]] = [array[j+1],array[j]];
            flag = 1;
        }
    }
    if(flag == 0) break;
}


console.log("Sorted Array : "+array);