
//FizzBizz Problem

function fizzbuzz(){
	var i;
	for(i=1;i<=10;i++){
		if(i%3 ==0 && i%5 == 0){
			console.log("Fizz Buzz");
		}
		else if(i%3 == 0){
			console.log("Fizz");
		}
		else if(i%5 == 0){
			console.log("Buzz");
		}
		
		else
			console.log(i);
	}
}

fizzbuzz();
















// var i=0;
// for(i=0; i<=100;i++){

// 	console.log(i);

// if(i%3==0){

// 	console.log('Fizz');
// }

// else if(i%5==0){

// 	console.log('Buzz')
// }

// else if(i%3==0 && i%5==0){

// 	console.log('Fizz Buzz')
// }
// }