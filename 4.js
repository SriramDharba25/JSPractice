//Finding quotient without using / operator

var q =0;

function quotient(numerator,denominator){

	while(numerator>=denominator){

		numerator = numerator-denominator;
		q++;

	}
	return q;

}
console.log(quotient(100,7));