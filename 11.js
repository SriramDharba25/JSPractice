/*function fun(n){

	if(n==0)
		return;

	console.log(n%2);
	fun(Math.floor(n/2));
}

console.log(fun(25));*/

/*function print(n){
	if(n>4000)
		return;
	console.log(n);
	console.log(2*n);
	console.log(n);

}

print(1000);*/


/*var n;
function fun(n)
{
	if(n==0 || n==1)
		return n;
	if(n%3 != 0)
		return 0;

	return fun(n/3);
}

console.log(fun(27));*/

function foo(n,r)
{
	if(n>0){
		return (n%r+foo(n/r,r));
	}
	
	else {
		return 0;
	}
}

console.log(foo(513,2))

