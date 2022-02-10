// bigNum.js
const numbers = [34, 45, 56, 73, 23, 12, 65];
let bigNum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element>bigNum) {
        bigNum=element;
    }
}
console.log(bigNum);
