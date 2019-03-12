function timeAdder(value1, label1, value2, label2){
  if(arguments.length < 4)
    return false;

  if(typeof value1 !== 'number' || value1 < 0 || typeof value2 !== 'number' || value2 < 0)
    return "Please enter valid value";

  var validStrings = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
  var singularArray = ["second", "minute", "hour", "day"];

  if(!validStrings.includes(label1) || !validStrings.includes(label2))
    return "Please enter valid string";

  if(value1 > 1 && singularArray.includes(label1)){
    return ["label should not be singular", false];
  }

  if(value2 > 1 && singularArray.includes(label2)){
    return ["label should not be singular", false];
  }

 let total;
  switch(label1){
    case "seconds":
    case "second":
      switch(label2){
        case "seconds":
        case "second":
           total = value2 + value1;
          return SecondsToBiggerUnit(total);
        case "minutes":
        case "minute":
          total = (value2 * 60) + value1;
          return SecondsToBiggerUnit(total);
        case "hours":
        case "hour":
          total = (value2 * 60 * 60) + value1;
          return SecondsToBiggerUnit(total);
        case "days":
        case "day":
          total = (value2 * 60 * 60 * 24) + value1;
          return SecondsToBiggerUnit(total);
        default:
          break;
      }
    case "minute":
    case "minutes":
      switch(label2){
        case "seconds":
        case "second":
          total = value2 + value1 * 60;
          return SecondsToBiggerUnit(total);
        case "minutes":
        case "minute":
          total = (value1 * 60) + value2 * 60;
          return SecondsToBiggerUnit(total);
        case "hours":
        case "hour":
          total = (value1 * 60) + value2 * 60 * 60;
          return SecondsToBiggerUnit(total);
        case "days":
        case "day":
          total = (value1 * 60) + value2 * 60 * 60 * 24;
          return SecondsToBiggerUnit(total);
      }
    case "hours":
    case "hour":
      switch(label2){
        case "seconds":
        case "second":
          total = value2 + value1 * 60 * 60;
          return SecondsToBiggerUnit(total);
        case "minutes":
        case "minute":
          total = (value1 * 60) + value2 * 60 * 60;
          return SecondsToBiggerUnit(total);
        case "hours":
        case "hour":
          total = (value1 * 60 * 60) + value2 * 60 * 60;
          return SecondsToBiggerUnit(total);
        case "days":
        case "day":
          total = (value1 * 60 * 60 * 24) + value2 * 60 * 60;
          return SecondsToBiggerUnit(total);
      }
    case "days":
    case "day":
      switch(label2){
        case "seconds":
        case "second":
          total = value2 + value1 * 60 * 60 * 24;
          return SecondsToBiggerUnit(total);
        case "minutes":
        case "minute":
          total = (value1 * 60 *  60 * 24) + value2 * 60 ;
          return SecondsToBiggerUnit(total);
        case "hours":
        case "hour":
          total = (value1 * 60 * 60 * 24) + value2 * 60 * 60;
          return SecondsToBiggerUnit(total);
        case "days":
        case "day":
          total = (value1 * 60 * 60 * 24) + value2 * 60 * 60 * 24;
          return SecondsToBiggerUnit(total);
      }
  }
}

function SecondsToBiggerUnit(seconds){
  console.log(seconds);
  console.log(seconds % 60);
  if(seconds % 60 === 0){
    return MinutesToBiggerUnit(seconds / 60);
  }
  else {
     return [seconds, "seconds"];
  }
  
}

function MinutesToBiggerUnit(minutes){
  console.log(minutes + ' minutes')
  if(minutes % 60 === 0){
    return HoursToBiggerUnit(minutes / 60);
  }
  else if(minutes % (60 * 24) === 0){
    return [minutes / (60 * 24), "days"];
  } 
  else 
  {
    return [minutes, "minutes"];
  }
}


function HoursToBiggerUnit(hours){
  if(hours % (60 % 24) === 0){
    return [hours / 24 , "days"];
  } 
  else 
  {
    return [hours, "hours"];
  }
}


console.log(timeAdder(20,"hours",5,"hours"))