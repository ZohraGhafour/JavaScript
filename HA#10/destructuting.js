//The difference between destructuring an object and destructuring an array is that we need to take name of the properties or 
//variables name while destructuring an object. But that is not the case while destructuring an array. 
//We can provide any name to the varaiable while destructuring.
//We can return an array from a function and destructure the retuend array.

function myArray(){
	return ['apple', 'banana', 'orange'];
}

const [ap, ban, or] = myArray();

console.log(ap); //prints apple

var student = {
	name : 'vikram',
	standard : 'Expert',
	address: {
		'street1' : 'Bangalore',
		'City' : 'Bangalore'
	}
};


const {name, address : {City}}= student;

console.log(name, City);
