/*Based off the exercise from 'YDKJS: Up and Going', this partly interactive module has the user buying multiple phones based
on funds provided by their 'boss'. They are given the choice to shop for phones and accerories between 
three different brands: Apple, Google, and Microsoft; depending on which company they choose determines the price and 
family the phone belongs to. If they reach their spending threshold for phones (dependent on the company), they will be
prompted to purchase what little accesories they can (the acceroies must belong to the respective phone brand). Once they
cannot purchase anymore phones or accerories, the 'mini-game' ends.*/

//main function for inititalizing a set number for spending.
var uno = 5000.00;

// main function for initializing taxes.
var tax =  function(og) {
    let rate = 0.08;
     og *= rate;
    return og;
}

//adds tax deducted price and dollar sign to items.
var sum = function(add, sub){
    let total = add - sub;
    if(sub === undefined){
        return add;
    }
    return total;
}

//makes the process of comparing prompts less tedious. 
let par = function (word) {
    return word.toLowerCase()
}

//creates limit 
const limit = 200.00

//phone prices
var phone = {
    app : sum(200.00),
    goog : sum(150.00),
    micro : sum(100.00)
}

//accesory pricing (didn't see the need to give Microsoft a more expensive acc).
var acc =  {
    appacc : sum(60.00),
    googacc : sum(50.00),
    micracc : sum(30.00) 
}


//the real juice of the 'bases'. un: funds, deux: phone, trois: accessories, quatre: phone title.
var cycle = function(un, deux, trois, quatre) {
    let glance = prompt("The new " + quatre + " looks nice. But is it worth it?");
    while(par(glance) == "yes") {
        un -= deux + tax(deux);
        alert("You have " + un + " left in your spending funds.");
        let look = prompt("Should I buy another " + quatre + " ?");
        if(par(look) == "no"){
            return accessory(un, trois);
        }
    }
    if(par(glance) == "no") {
        alert("*gracefully shuffles outside*");
        return questaire(begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to?"));
    }
}

//the accesory function; included in repeat() due to redundant nature. funds will take in (hopefully) uno, access is for accessories
var accessory = function(funds, access) {
    let third = prompt("Now there's accesories. They cost " + access + " bucks a pop. Should I buy one?");
    while(par(third) == "yes") {
        funds -= access + (tax(access));
        alert("you have " + funds.toFixed() + " left to spend with");
        third = prompt("How about another?");
    } 
    if(par(third) == "no") {
        alert("*gracefully shuffles outside*");
        questaire(begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to?"));
     }
}

//function that cycles through commerce-related questions
var questaire = function(start) {
    if(par(start) == "apple"){
        cycle(uno, phone.app, acc.appacc, "iPhone Xs");
        } else if(par(start) == "google") {
            cycle(uno, phone.goog, acc.googacc, "Pixel 3");
        } else if(par(start) == "microsoft") {
            cycle(uno, phone.micro, acc.micracc, "Lumia 950 XL");
        } else {
            alert("I should be sure to choose one of those options");
            questaire(begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to first?"));
        }
}

alert("b0ss: 'Here's your allowance for the company phones.'");
alert("* hands you " + uno + " dollars.*");
alert("b0ss: It's...what we can afford at the time. Use this to purchase the phones you see fit for the employees.");
alert("'Don't be afraid to purchase any accesories for the phones as well, so long as you can afford it ;)'");

//hopefully initiates questaire function.
questaire(begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to first?"));