//Adding numbers in Array

function sum(a){
var sum= 0;
var i;
for( i=0; i<a.length;i++){
	sum = sum+a[i]
}
return sum;
}

console.log("Sum of the numbers in Array is = "+sum([3,4,5,-9]))
