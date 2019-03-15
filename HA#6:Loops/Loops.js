for (var i = 0; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0){
		console.log("fizzbuzz");
	}
	else if(i % 3 === 0){
		console.log("fizz");
	}
	else if(i % 5 === 0)
	{
		console.log("buzz");
	}
	else if(IsPrime(i)){
		console.log("prime");
	}
	else {
		console.log(i);
	}
}

function IsPrime(num){
	let i = 2;
	while(i <= num){
		if(num % i === 0 && i !== num){
			return false;
		}
		i++;
	}

	return true;
}