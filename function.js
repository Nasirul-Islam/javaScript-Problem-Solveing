// কোন একটা প্রোগ্রামের ছোট ছোট কাজ কে ফাংশন বলে। ফাংশনের একটা নাম থাকে এক বা একাধিক ইনপুট নিতে পারে একটা ফাংশন কে কল করে একই কাজ বারবার করা যায়।

// multiply two numbers using function
function multiplyNum(num1, num2){
    const multiply = num1 * num2;
    return multiply;
}
const result1 = multiplyNum(5,5);
console.log(result1);

// sum of the three numbers using function
function sumNum(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum;
}
const result2 = sumNum(5,5,5);
console.log(result2);

