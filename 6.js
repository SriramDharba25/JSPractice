//Factorial of a number - Iterative method
function factorial(number,fact){
	// var fact = 1;
	for(var i=1; i<=number; i++){
		fact = fact * i;
	}
	console.log(fact);

}


//function factorial(number,i){
	
	// var fact =1;
	// while(i<=number){
		// fact = fact * i;node 
		// i++;
	// }
	// console.log(fact+1);
// }
// factorial(4,1);
// factorial(0,1);
function factorial(number, fact){

	for(var i=number;i>=1;i--){
		fact = fact*i
	}
	console.log(fact);
}

factorial(5,1)