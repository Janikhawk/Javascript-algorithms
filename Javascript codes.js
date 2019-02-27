//**1**--------Check prime---------
//////////////////////////////
function checkPrime(n){
	if(n == 2 || n == 3) return true;
	if(n % 2 == 0) return false;

	var divisor  = 3;
	var limit = Math.sqrt(n);

	for( var i = divisor; i<limit; i++){
		if(n % divisor == 0)
			return false;
		else divisor+=2;
	}
	return true;
}

//**2**-------Prime factors---------
///////////////////////////////
function primeFactors(n){
	var factors = [], divisor = 2;

	while(n>2){
		if(n%divisor == 0){
			factors.push(divisor);
			n = n/divisor;
		} else divisor++;
	}
	return factors;
}

//**3**-------Fibonacci---------
///////////////////////////////

function fibonacci(n){
	var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo.push(fibo[i-1] + fibo[i-2]);
  }

 return fibo[n];
}

function fibonacci(n){
	if(n<=1) return n;
	else return fibonacci(n-1) + fibonacci(n-2);
}

//**4**-------Greatest Common Divisor---------
////////////////////////////////////////

function commonDivisor(a,b){
	if(b==0)
		return a;
	else return commonDivisor(b, a%b);
}

//**5**-------Remove duplicate---------
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

//**6**-------Merge arrays---------
//////////////////////////////////
function mergeSortedArray(a,b){
	var merged = [], aElm = a[0], bElm = b[0], i = 0, j = 0;
	if(a.length == 0) return b;
	if(b.length == 0) return a;

	while(aElm || bElm){
		if((aElm && !bElm) || aElm < bElm){
			merged.push(aElm);
			aElm = a[i++];
		} else {
			merged.push(bElm);
			bElm = b[i++];
		}
	} return merged;
}

//**7**-------Swap numbers---------
//////////////////////////////////
function swapNumb(a,b){
	b = b-a;
	a = a+b;
	b = a-b;
}

//**8**-------String reverse---------
//////////////////////////////////
function reverse(str){
	var rtnStr = ''	;
	for(var i = str.length; i>=0; i--){
		rtnStr += str[i];
	}
	return rtnStr;
}

function reverse(str){
	var rtnStr = [];
	if(!str || typeof str != 'string' || str.length < 2) return str;
	for(var i = str.length - 1; i >= 0; i--){
		rtnStr.push(str[i]);
	}
	return rtnStr.join('');
}

function reverse(str){
	if(str === "") return "";
	else return reverse(str.substr(1)) + str.charAt(0);
}

function reverse(str){
  if(!str || str.length <2) return str;
  
  return str.split('').reverse().join('');
}

String.prototype.reverse = function (){
  if(!this || this.length <2) return this;
  
  return this.split('').reverse().join('');
}

//**9**-------Reverse words---------
/////////////////////////////////////
function reverseWords(str){
	return str.split(' ').reverse();
}

//**11**-------First non-repeating char---------
////////////////////////////////////////////////
function firstNonRepeat(str){
	var len = str.length, char, charCount = {};

	for(var i = 0; i < len; i++){
		if(charCount[str[i]]){
			charCount[str[i]]++;
		}
		else charCount[str[i]] = 1;
	}

	for(var j in charCount){
		if(charCount[j]==1)
			return j;
		
	}
}

//**13**-------Checl palindrome---------
////////////////////////////////////////
function checkPalindrome(str){
	return str == str.split('').reverse().join('');
}

function isPalindrome(str){
	 var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
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

//-------Counting zeros---------
//////////////////////////////////
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}