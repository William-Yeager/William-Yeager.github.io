// Gets the solution from last page
var bestSolution = sessionStorage.getItem("bestSolution");
var secondSolution = sessionStorage.getItem("secondSolution");
var thirdSolution = sessionStorage.getItem("thirdSolution");
console.log(bestSolution);
console.log(secondSolution);
console.log(thirdSolution);

// Solutions Array
const solutions = {
	trees: 'Trees Around the Property',
	skirting: 'Skirting',
	swampCoolers: 'Swamp Coolers',
	portableAC: 'Portable AC',
	reflectiveCoating: 'Reflective Coating',
	shadeCanopies: 'Shade Canopies',
	solarCanopies: 'Solar Canopies',
	curtains: 'Curtains',
	shutters: 'Shutters',
	heatPumps: 'Heat Pumps',
	airSealing: 'Air Sealing',
	misters: 'Misters',
	windowTinting: 'Window Tinting'
}

for(var s of Object.entries(solutions)) {
	if(bestSolution == s[0]) {
		bestSolution = s[1];
	} 
	if(secondSolution == s[0]) {
		secondSolution = s[1];
	}
	if(thirdSolution == s[0]) {
		thirdSolution = s[1];
	}
}

// Post solution to html
var b = document.getElementById("best");
var s = document.getElementById("second");
var t = document.getElementById("third");
b.innerHTML = bestSolution;
s.innerHTML = secondSolution;
t.innerHTML = thirdSolution;
