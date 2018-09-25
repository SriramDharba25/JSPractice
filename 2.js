/*Write a program to Generate Even and Odd Numbers
 less than N*/

 function generateeven(number){
 	for(var i=0;i<=number;i++){
 		if(i%2 == 0){
 			console.log(i);
 		}
 	}
 }

//generateeven(5);

 function generateodd(number){
 	for(var i=0;i<=number;i++){
 		if(i%2 == 1){
 			console.log(i);
 		}
 	}
 }

//generateodd(15);

function Neven(number){
 	for(var i=0;i<number*2;i++){
 		if(i%2==0)
 			console.log(i);
 	}
 }
// Neven(10);

function Nodd(number){
 	for(var i=0;i<number*2;i++){
 		if(i%2==1)
 			console.log(i);
 	}
 }					

function values(a,b) {
 for(i=a; i<b;i++){
 	if(i%2==0)
 		console.log(i);
 	}	
}
values(2,10);