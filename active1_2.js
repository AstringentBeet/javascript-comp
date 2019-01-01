/*Based off the exercise from 'YDKJS: Up and Going', this partly interactive module has the user buying multiple phones based
on funds provided by their 'boss'. They are given the choice to shop for phones and accerories between 
three different brands: Apple, Google, and Microsoft; depending on which company they choose determines the price and 
family the phone belongs to. If they reach their spending threshold for phones (dependent on the company), they will be
prompted to purchase what little accesories they can (the acceroies must belong to the respective phone brand). Once they
cannot purchase anymore phones or accerories, the 'mini-game' will (eventually) end.*/

/*...might as well create a mockup e-commerce website that tracks purchases...either 
that or make a mini-game that focuses on purchasing a ceratin amount of phones*/

/*Create a receipt function! If at all possible, make to where you can present it to your boss when you're finished/run out of funds.
While you're at it, give the user more freedom in what they say for options. */

// main function for initializing taxes.
var tax =  function(og) {
    let rate = 0.08;
     og *= rate;
    return og;
}

//adds tax deducted price and dollar sign to items.
var sum = function(prime, segundo){
    let total = prime + segundo;
    if(segundo === undefined){
        return prime;
    }
    return total;
}

//makes the process of comparing prompts less tedious.  
var par = word => word.toLowerCase();

//makes rounding numbers much easier
var dos = num => num.toFixed(2);

const limit = 200.00;

var phone = {
    app : sum(200.00),
    goog : sum(150.00),
    micro : sum(100.00)
}

//accesory pricing.
var acc =  {
    appacc : sum(60.00),
    googacc : sum(50.00),
    micracc : sum(30.00) 
}

//function that cycles through commerce-related questions
var questaire = function(start) {
    let begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to?");
    if(par(begin) == "apple"){
        cycle(start, phone.app, acc.appacc, "iPhone Xs");
        } else if(par(begin) == "google") {
            cycle(start, phone.goog, acc.googacc, "Pixel 3");
        } else if(par(begin) == "microsoft") {
            cycle(start, phone.micro, acc.micracc, "Lumia 950 XL");
        } else {
            alert("I should be sure to choose one of those options");
            questaire(uno);
        }
}

//the real juice of the 'bases'. un: funds, deux: phone, trois: accessories, quatre: phone title.
var cycle = function(un, deux, trois, quatre) {
    let glance = prompt("The new " + quatre + " looks nice. But is it worth it?");
    while(par(glance) == "yes") {
        un -= sum(deux, tax(deux));
        alert("I have $" + dos(un) + " left to spend with.");
        let look = prompt("Should I buy another " + quatre + " ?");
        if(par(look) == "no"){
            return accessory(un, trois);
        }
    }
    if(par(glance) == "no") {
        alert("*gracefully shuffles outside*");
        alert("hmm...looks like I have $" + dos(un) + " left to spend with");
        return questaire(un);
    } else {
        alert("I need to make up my mind about this...");
        return cycle(un, deux, trois, quatre);
    }
}

//the accesory function; included in repeat() due to redundant nature. funds will take in (hopefully) uno, access is for accessories
var accessory = function(funds, access) {
    let third = prompt("Now there's accesories. They cost " + access + " bucks a pop. Should I buy one?");
    while(par(third) == "yes") {
        funds -= sum(access, tax(access));
        alert("you have $" + funds.toFixed() + " left to spend with");
        third = prompt("How about another?");
    } 
    if(par(third) == "no"){
        alert("*gracefully shuffles outside*");
        alert("hmm...looks like I have $" + dos(funds) + " left to spend with");
        return questaire(funds);
        } else {
            alert("I need to make up my mind about this...");
            return accessory(funds, access);
        }
}

//probably going to create a class out of this (once I learn how it works)
alert("b0ss: So after getting that...'lovely' memo from Arnold the other day, I've come to a realization that our company is in need of newer phones");
alert("b0ss: With that being said and done, I don't have the time to be concerned about the nuances of phone specs, which is why I'm sending you");
alert("me: *gulps* ");
var uno = prompt("b0ss: So how much is a good amount to purchase at least ten phones?");
while((uno > 5000 || uno < 2000) && isNaN(uno)) {
    alert("b0ss: *sigh* c'mon don't be ridiculous, I wasn't born yesterday.");
    uno = prompt("So how much do ya need?");
}
alert("b0ss: *hands you $" + uno + " dollars* ");
alert("b0ss: Great. Don't be afraid to purchase any accesories for the phones as well, so long as you can afford it ;)'");

questaire(uno);