function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log("HELLO")
}
function logWhisper(string){
  console.log("hello")
}

function sayHiToGrandma(string){
  var lower= string.toLowerCase();
  var upper= string.toUpperCase();
  var lover= "I love you, Grandma.";
  
  if(lower=== string){
    return "I cant hear you!";
  }
  else if(upper===string){
    return "YES INDEED!";
  }
  else(lover===string);{
    return "I love you, too.";
  }
}
   