
var is11Cross = false;
var is11Circle = false;
var is12Cross = false;
var is12Circle = false;
var is13Cross = false;
var is13Circle = false;
var is21Cross = false;
var is21Circle = false;
var is22Cross = false;
var is22Circle = false;
var is23Cross = false;
var is23Circle = false;
var is31Cross = false;
var is31Circle = false;
var is32Cross = false;
var is32Circle = false;
var is33Cross = false;
var is33Circle = false;

var isCircleAdded = false;
var isCrossAdded = false;


var d11 = document.getElementById("div11");
var d12 = document.getElementById("div12");
var d13 = document.getElementById("div13");
var d21 = document.getElementById("div21");
var d22 = document.getElementById("div22");
var d23 = document.getElementById("div23");
var d31 = document.getElementById("div31");
var d32 = document.getElementById("div32");
var d32 = document.getElementById("div33");
var positionsFilled = 0;

console.log(d11);

document.addEventListener("click", AddCircleOrCross);

function AddCircleOrCross(e){
	console.log(e.srcElement.attributes.id.value);
	let childNode;
	isCircleOrCross();
	if(e.srcElement.localName === "div")
	{
		if(isCircleAdded){
			e.srcElement.append(createCircle());
			setFlagsForCircle(e.srcElement.attributes.id.value);
		}
		else if(isCrossAdded){
			e.srcElement.append(createCross());
			setFlagsForCross(e.srcElement.attributes.id.value);
		}
		positionsFilled++;
		if(forXWin() || forCirleWin())
		{
			location.reload(); 
		}
		else
		{
			if(positionsFilled === 9)
			{
				alert("Cats game!");
			}
		}
		
	}
}



function setFlagsForCross(div){
	switch(div){
		case "div11":
			is11Cross = true;
			break;
		case "div12":
			is12Cross = true;
			break;
		case "div13":
			is13Cross = true;
			break;
		case "div21":
			is21Cross = true;
			break;
		case "div22":
			is22Cross = true;
			break;
		case "div23":
			is23Cross = true;
			break;
		case "div31":
			is31Cross = true;
			break;
		case "div32":
			is32Cross = true;
			break;
		case "div33":
			is33Cross = true;
			break;
	}

}

function setFlagsForCircle(div){
	switch(div){
		case "div11":
			is11Circle = true;
			break;
		case "div12":
			is12Circle = true;
			break;
		case "div13":
			is13Circle = true;
			break;
		case "div21":
			is21Circle = true;
			break;
		case "div22":
			is22Circle = true;
			break;
		case "div23":
			is23Circle = true;
			break;
		case "div31":
			is31Circle = true;
			break;
		case "div32":
			is32Circle = true;
			break;
		case "div33":
			is33Circle = true;
			break;
	}
}

function forXWin()
{
	if((is11Cross && is12Cross && is13Cross) || (is21Cross && is22Cross && is23Cross) ||
		(is31Cross && is32Cross && is33Cross) ||(is11Cross && is22Cross && is33Cross) || 
		(is12Cross && is22Cross && is32Cross) || (is11Cross && is21Cross && is31Cross) ||
		(is13Cross && is23Cross && is33Cross) || (is13Cross && is22Cross && is31Cross))
	{		
		alert('X has won!!!');
		return true;
	}
}

function forCirleWin()
{
	if((is11Circle && is12Circle && is13Circle) || (is21Circle && is22Circle && is23Circle) ||
		(is31Circle && is32Circle && is33Circle) ||(is11Circle && is22Circle && is33Circle)  ||
		(is12Circle && is22Circle && is32Circle) || (is11Circle && is21Circle && is31Circle) ||
		(is13Circle && is23Circle && is33Circle) || (is13Circle && is22Circle && is31Circle))
	{
		alert('Circle has won!!!');
		return true;
	}
}

function isCircleOrCross(){
	if(!isCircleAdded && !isCrossAdded){
		isCircleAdded = true;
	}
	else if(isCircleAdded){
		isCrossAdded = true;
		isCircleAdded = false;
	}
	else if(isCrossAdded){
		isCircleAdded = true;
		isCrossAdded = false;
	}
}

function getChildNodeid(e){
	return e.srcElement.firstChild.id;
}

function getChildNode(e){
	return e.srcElement.firstChild;
}

function createCross(){
	var p = document.createElement("p");
	p.innerHTML = "&#10060;";
	return p;
}

function createCircle(){
	var circle = document.createElement("div");
	circle.setAttribute('id', 'circle');
	return circle;
}