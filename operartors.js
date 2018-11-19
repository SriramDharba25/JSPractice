// var a = [1,2,3,[4,5],6,7,[8]]
// console.log([...a]);

// var	sum =0;
// function add(a,b,c){
// 	for(i=a;i<=)
// }

// var sum =0;
// function add(a,b){
//  sum=a+b;
//  console.log(sum)
// }

function add(...args){
	var sum = 0;
	args.forEach(function(k){
		sum = sum+k;
	})
	console.log(sum);
}	

add(1,2,3,43,4,55,2,5);

