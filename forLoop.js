// যেই লুপ for শব্দ দিয়ে লিখতে হয় এবং for শব্দের পর তিনটা অংশ থাকে।  প্রথম অংশে একটা ভেরিয়েবল ডিক্লেয়ার করা হয়, মাঝখানের অংশে শর্ত থাকে এবং শেষ অংশে ভেরিয়েবল এর মান এক এক করে বাড়ানো হয়। মাঝখানের শর্ত সত্যি হলে for লুপ চলবে আর শর্ত মিথ্যা হলে for লুপ এর কাজ শেষ। 

// The sum of the numbers from 30 to 60
function sum(num) {
    let sumation = 0;
    for (let i = 30; i <= num; i++) {
        sumation = sumation+i;
        // console.log(i);
    }
    // console.log(sumation);
}
// sum(60);

// Loop over array
const friends = ['A', 'B', 'C', 'D', 'E']; 
for (let i = 0; i<friends.length; i++){
    // console.log("Lend me money Mr.", friends[i]);
}

// Multiplication with loop 
for (let i = 1; i <= 10; i++) {
    console.log("7 X ", i, "=", i*7);
}