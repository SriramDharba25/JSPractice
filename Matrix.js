/*// 2D Matrices

var arr2 = [[1,2],[3,4],[5,6]];
for(var i=0;i<arr2.length;i++){

	for(var j=0;j<arr2[i].length;j++){

		console.log(arr2[i][j]);
	}
}*/

// 1D Matrix 

/*var arr1 = [0,1,2,3,4,5,6];
	for(var i=0;i<arr1.length;i++){
		if(i%2==0){

			console.log(arr1[i]);
		}

1	}*/

/*// Printing All Even numbers
var arr1 = [0,2,4.4,7,9,11,14];

	for(var i=0;i<arr1.length;i++){
		if(arr1[i]%2==0){

			console.log(arr1[i]);
		}*/

/*//1D Matrix Addition//

var arr1 = [0,1,2,3];
var arr2 = [2,5,6,8];
var arr3 = [];

	for(var i=0;i<arr1.length;i++){
		
			arr3[i]=arr1[i]+arr2[i];
			}
			console.log(arr3)*/



// //2D Matrices Addition

// var arr1 = [[0,1],[2,3]];
// var arr2 = [[2,5],[6,8]];
// var arr3 = [[],[]];

// 	for(var i=0;i<2;i++){

// 		for(var j=0;j<2;j++){

// 					arr3[i][j]=arr1[i][j]+arr2[i][j];
// 			}
// 		}
// 		console.log(arr3);

// // 3D Matrices Addition

// 	var arr1 = [[0,1,0],[2,3,1],[4,5,1]];
// 	var arr2 = [[2,5,1],[6,8,2],[5,4,2]];

// // // to delete index values in Array

// var arr1 =[5,3,8,1];
// var temp;
// function index(j){

// 	for(var i=0;i<arr1.length-j;i++){

// 		temp=arr1[arr1.length-j];
// 		arr1[arr1.length-j]=arr1[j];
// 		arr1[j] = temp;

		
// 	}
// 	console.log(arr1[i]);
// }

// index(1);


// // 
// var arr1 =[5,3,8,1];
// var temp;
// function index(j){

// 	for(var i=0;i<arr1.length;i++){

// 		temp=arr1[arr1.length-1];
// 		arr1[arr1.length-1]=arr1[i];
// 		arr1[i] = temp;
// }
// console.log(arr1[arr1.length-j])



// }

// index(1)

// x=5;
// console.log(x);


// function deposit(amount) {
// this.balance += amount;
// }
// function withdraw(amount) {
// if (amount <= this.balance) {
// this.balance -= amount;
// }
// if (amount > this.balance) {
// print("Insufficient funds");
// }
// }
// function toString() {
// return "Balance: " + this.balance;
// }

// deposit(500)


// Shift and unshift

var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
a.shift();
a.shift();
a.shift();
