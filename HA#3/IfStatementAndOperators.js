// Socrates is mortal 
var men = {
	ismortal : false,
	allmen :["socrates"]
};

if(men.ismortal && men.allmen.includes("socrates")){
	console.log("socrates is a mortal");
}
else{
  console.log("Socrates is not mortal");
}

//Cake is chocolate
var cake = 'chocolate';
if(cake === 'vanilla' || cake === 'chocolate'){
	if(cake !== 'vanilla'){
		console.log('This cake is chocolate');
	}
}