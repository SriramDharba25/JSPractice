//Direct recursion
/*var n;
function value(n){
	if (n<=10){
	return 1;
}
else{
	return n*(n+1)/2;
}

}

console.log(value(5));*/

//Indirect recursions
function one(){
	var i;
	if(i==0){
		console.log("One")
	}
	else {
		return two();
	}
}

function two(){
	var i;
	if(i>0 && i<=10){
		console.log("Two")
	}
	else {
		return three();
	}
}

function Three(){
	var i;
	if(i>10 && i<=15){
		console.log("Three")
	}
	else {
		return one();
	}
}


Three(12)