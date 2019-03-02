//explnation of var, let and const

//var: var keyword helps us to create a variable in javascript. We can assign any type of variable to var keyword. Var is 
// scoped inside a function. Suppose there is a if clause in the function and we have defined a variable using the
//vary keywors, the variable can be accessed outside of the if clause but inside the function. Below is an example

function SayHello(){
	if(true){
		var myName = 'vikram';		
	}
	console.log(myName);
}


//let: let keyword is agiain used to declare variables. But it can be accessed inside the block in which it is decalred.
//Below is example

function SayHello(){
	if(true){
		let myName = 'vikram';		
	}
	console.log(myName); //gives errror undefined
}

//const: The scoping is same as let keyword but once you assign any value to const variable. It cannot be modified

function SayHello(){
	const myName = 'VIkram';
	if(true){
		myName = 'vikram';	//TypeError: invalid assignment to const `myName'	
	}
	console.log(myName); r
}

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).