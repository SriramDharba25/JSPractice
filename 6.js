//Factorial of a number - Iterative method
function factorial(number){
	var fact = 1;
	for(var i=1; i<=number; i++){
		fact = fact * i;
	}
	console.log(fact);

}

factorial(4);


//function factorial(number,i){
	
	// var fact =1;
	// while(i<=number){
		// fact = fact * i;node 
		// i++;
	// }
	// console.log(fact+1);
// }
// // factorial(4,1);
// // factorial(0,1);
// function factorial(number, fact){

// 	for(var i=number;i>=1;i--){
// 		fact = fact*i
// 	}
// 	console.log(fact);
// }

// factorial(5,1)


// //recursive
// var factorial = function(n) {
//     if(n == 0 || n==1) {
//         return 1
//     } else {
//         return n * factorial(n - 1);
//     }
// }
 
// console.log(factorial(num));