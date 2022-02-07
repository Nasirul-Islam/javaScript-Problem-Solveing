// Feet To Mile
function feetToMile(feet) {
    const yard = feet / 3;
    const mile = yard / 1760;
    return mile;
}
const result = feetToMile(10000);
console.log(result);

