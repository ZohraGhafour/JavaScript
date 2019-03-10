var mortalMen = ['Vikram', 'John', 'socrates'];

function IsMortal(name){
	if(typeof name === 'string' && mortalMen.includes(name)){
		return true; 
	}

	return false;
}

console.log(IsMortal('socrates'));
console.log(IsMortal(5));