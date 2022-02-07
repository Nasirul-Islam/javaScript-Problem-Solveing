function coffeeOrTea (price) {
    if(price<100){
        console.log("I want to eat coffee.")
    }
    else{
        console.log("I want to eat tea")
    }
}
coffeeOrTea(90);

function tour(budget) {
    if(budget>=5000){
        console.log("I want to Cox's Bazar")
    }
    else{
        console.log("I will go to University.")
    }
}
tour(6000);

function iceCreamOrWater(price, hot) {
    if(price<50 && hot){
        console.log("I want to eat Icecream.");
    }
    else{
        console.log("I want to eat Pure Water.")
    }
}
iceCreamOrWater(40, false);