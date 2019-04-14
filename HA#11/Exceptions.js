// Code goes here
function reverseJsonArray(jsonArray){
	try{	   
	    if(jsonArray !== undefined){
	        var jsonObject = JSON.parse(jsonArray);
      	  if(typeof jsonObject !== undefined && typeof jsonObject.length === 'number'){      
	      		var arrayToReturn = [];
	      		for (var i = jsonObject.length - 1; i >= 0; i--) {
	      			arrayToReturn.push(jsonObject[i]);
	      		}
      		}
	      	else{
	      	  throw "Input is not a correct JSON format";
	      	}
	    }
	    else{
	       throw "Provide some input";
	    }
	    
	}
	catch(e){
	  console.log(e);
	  return false;
	}
	return JSON.stringify(arrayToReturn);
}

var arr = [];

console.log(reverseJsonArray(JSON.stringify(arr)));


