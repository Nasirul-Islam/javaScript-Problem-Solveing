// Height Of Everest
const feet = 29029;

// Feet to Yards
function feetToYards(feet) {
    const yards = feet / 3;
    return yards;
}
const yard = feetToYards(feet);
console.log(yard, "yards");

// Yards To Mile
function yardsToMile(yards) {
    const miles = yards / 1760;
    return miles;
}
const mile = yardsToMile(yard);
console.log("Height Of Everest Is", mile, "Mile");
