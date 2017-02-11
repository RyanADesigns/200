var creature = {
	"name": "",
	"legs": "",
	"housebroken": "" 
};

alert("Answer the following questions to create your critter!")

var name = prompt("what is your critters name?", "jimmy");
if (name == "") {
  creature.name = "jimmy"; 
} else {
  creature.name = name; 
}

var legs = prompt("how many legs does critter have? must be a # between 0-100")

var pars_legs = parseInt(legs);

if (pars_legs >= 0 && pars_legs <= 100){
  creature.legs = pars_legs;
}
console.log(creature)

var housebroken = prompt("Is your critter housebroken? yes or no")
  if (housebroken == "yes") {
    creature.housebroken = true;
  } else if (housebroken = "no") {
    creature.housebroken = false;
  } else {
//    ask again 
  }

/*counter each key in creature:*/
for (var key in creature) {
  console.log(key);
  console.log(creature[key]);
}


