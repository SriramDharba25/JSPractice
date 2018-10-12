// //Prime Number without using count


// function nprime(n){
// 	if(n==1){
// 		return console.log("Not a Prime number");
// 	}
// 	if(n==2){

// 		return console.log("It is Prime number");
// 	}
// 	for(var i=2;i<n;i++){

// 		if(n%i ==0){

// 			return console.log("It is not a Prime number");
// 		}

// 		else {

// 			console.log("It is prime number");
// 		}
// 	}
// }

// nprime(5);

/*//Prime number with count

var count =0
function Nprime(n){
	for(var i=2;i<=n;i++){

		if(n%i == 0){

			count++;
		}

	}

		if(count ==1){

			console.log(n+" is a Prime No.");
				}		
		else{

			console.log("Not a Prime no.")
		}
}

Nprime(17);*/

// Prime number using (Math.Sqrt(n))

// function Nprime(n){

// 	if(n<2){

// 		return false;
// 	}

// 	var q= Math.floor(Math.sqrt(n))

// 	for(var i=1;i<=q;i++){

// 		if(n%i !==0){
// 			console.log(n+"is a Prime Number");
// 		}
// 	}
// }

// // Prime number with Arrays

// function arr1(){

// var arr1 = [2,3,4,5,11,13,44,14];
	
// for(i=0;i<arr1.length;i++){
	
// 	var count = 0;

// 	for(var j=2; j<=arr1[i];j++){
// 		if(arr1[i] % j == 0){
// 			count++;
// 		}
// 	}
// 	if(count==1){
// 		console.log(arr1[i]+ "is a prime number.");
// 	}

// }

// }

// arr1();

// Print first n prime numbers

function Nprime(n){

for(i=0;i<n;i++){
	
	var count = 0;

	for(var j=2; j<=i;j++){
		if(i % j == 0){
			count++;
		}
	}
	if(count==1){
		console.log(i+ " is a prime number.");
	}

}

}

Nprime(100	);