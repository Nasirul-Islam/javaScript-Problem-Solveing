// যেই লোপ while শব্দ দিয়ে লিখতে হয় এবং while শব্দের পর একটা শর্ত থাকে।  সেই শর্তটা সত্যি হলে while লোপর ভিতরের কাজ করবে এবং কতবার লোপ চলেছে, সেটার মান এক বাড়াবে। আর শর্ত মিথ্যা হলে while লুপ এর কাজ শেষ। 

function greetings(friends) {
    let i = 0;
    while(i<friends){
        console.log("Eid Moburok");
        i++;
    }
}
greetings(15);


// var i = 1;
// while (i < 101) {
//     console.log("hi friends ", i);
//     i++;
// }
