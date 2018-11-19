Factorial of a number - Iterative method
function factorial(number,fact){
	// var fact = 1;
	for(var i=1; i<=number; i++){
		fact = fact * i;
	}
	console.log(fact);

}


factorial(5,1);


//function factorial(number,i){
	
	// var fact =1;
	// while(i<=number){
		// fact = fact * i;
		// i++;
	// }
	// console.log(fact+1);
// }
// factorial(4,1);
// factorial(0,1);


// Using Recursions
function fact(n){

	if(n==0 || n==1) {
		return 1;
	}
	else
		return n*fact(n-1);
}

console.log(fact(5));