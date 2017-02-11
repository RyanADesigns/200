//for(var i=0; i<4; i++) {
//	console.log("woof");
//}
//
//for(i=0; i<6; i++)
//  if(i % 2 == 0){
//    console.log("woah")
//  } else {
//    console.log("dude")
//  }

for(var i=100; i>=20; i=i-20){
  console.log(i);
}

/*
var alphabet = ["a","b","c","d","e","f","g","h","i",
"j", "k","l","m","n","o","p","q","r","s",
"t","u","p","q","r","s","t","u","v","w","x","y","z"]
*/

/*var pompeii = ["I","was","left","in","all","of","our","devices"]
for(i=0;i <= pompeii.length; i++){
  console.log(pompeii[i])
}*/
var bigday = "";
var slash = "/";
var bday = [03,24,95]
for(i=0; i< bday.length; i = i+2) {
  
  if (bday[i]<1) {
    console.log(bday + slash);
  }
}

var album = {
  "title": "pompeii",
  "year": "1978",
  "song": "Pompeii"
}
for (var i in album){
  var stringit = "this album's " + i + " is " + album[i];
  console.log(stringit);
}