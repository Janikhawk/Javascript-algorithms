//--------Check prime---------
//////////////////////////////
function isPrime(n){
	var divisor = 3,
	limit = Math.sqrt(n);

	if (n == 2 || n == 3)
		return true;
	if (n%2 == 0)
		return false;

	while(divisor <= limit){
		if(n % divisor == 0	)
			return false;
		else divisor +=2;		
	}
	return true;
}

//-------Prime factors---------
///////////////////////////////
function primeFactors(n){
	var factors = [],
		divisor = 2;

	while(n>2){
		if(n % divisor == 0){
			factors.push(divisor);
			n = n/divisor;
		} else divisor++;
	}
	return factors;
}

//-------Prime factors---------
///////////////////////////////
function fibonacci(n){
	if(n<=1)
		return n;
	else return fibonacci(n-1) + fibonacci(n-2);
}

//-------Greatest Common Divisor---------
////////////////////////////////////////

function commonDivisor(a,b){
	if(b==0)
		return a;
	else return commonDivisor(b, a%b);
}

//-------Remove duplicate---------
//////////////////////////////////
function removeDuplicate(arr){
	var exists={}, outerArr=[], elm;

	for(var i=0; i< arr.length; i++){
		elm = arr[i];
		if(!exists[elm]){
			outerArr.push[elm];
			exists[elm] = true;
		}		
	}
	return outerArr;
}

//-------Swap numbers---------
//////////////////////////////////
function swapNumb(a,b){
	b = b-a;
	a = a+b;
	b = a-b;
}


//-------Random between 5 and 7---------
//////////////////////////////////
function random5(){
	return 1 + Math.random()*5;
}

function random5to7(){
	return 5 + random5()/5 * 2;
}

//-------Missing number---------
//////////////////////////////////
function missingNumber(arr){
	var n = arr.length+1;
	sum = 0;
	var expectedSum = n* (n+1)/2;
	for(var i=0; i<arr.length;i++){
		sum += arr[i];
	}
	return expectedSum - sum;
}