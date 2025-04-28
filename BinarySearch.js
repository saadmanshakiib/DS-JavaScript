console.log("Binary Search ");
var array = [23,34,45,47,56,68,89,98];
console.log("Default Array  :"+array);
console.log("Status : "+binarySearch(68));

function binarySearch(target){
    var left = 0;
    var right = array.length-1;
   

    while(left<=right){
        var mid = Math.floor((left+right)/2);
        if(array[mid] == target){
            return mid+1;
        }
        else if(array[mid] < target){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return "Not Found";
}