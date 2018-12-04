/*Based off the exercise from YDKJS: Up and Going, this partly interactive module has the user buying multiple phones based
on randomly generated funds provided by their 'boss'. They are given the choice to shop for phones and accerories between 
three different brands: Apple, Google, and Microsoft; depending on which company they choose determines the price and 
family the phone belongs to. If they reach their spending threshold for phones (dependent on the company), they will be
prompted to purchase what little accesories they can (the acceroies must belong to the respective phone brand). Once they
cannot purchase anymore phones or accerories, the 'mini-game' ends.*/

//main function for inititalizing a set number for spending.
var base1 = function (amount) {
    do {
    let bank = ((Math.random() * 100)*50) + 900;
    amount = bank.toFixed(2);     
    } while (amount > 1000.00);
        return amount;
}

//fully establishes base1() as a variable
var uno = base1();

// main function for initializing taxes.
const tax =  function(og) {
    const rate = 0.08;
    rate * og;
    return rate;
}

//adds tax deducted price and dollar sign to items.
var sum = function(add, sub){
    let total = add - sub;
    if(sub === undefined){
        return "$" + add;
    }
    return "$" + total;
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
    micracc : sum(30.00), 
    appacc : sum(60.00),
    googacc : sum(50.00)
}

//the real juice of the 'bases'. Trois should be filled as the respective company's phone. un: phone, deux: accessory, trois: phone title.
var cycle = function(_un, deux, trois){
    let glance = prompt("The new" + trois + "looks nice. But is it worth it?");
    repeat(par(glance));
    //reduces the amount of individual prompts being made.
    let repeat = function(second) {
        //the accesory function; included in repeat() due to redundant nature.
        let accessory = function(third){
            third = prompt("What about accesories? They cost" + deux + "bucks a pop.");
            while(par(third) == "yes") {
                un -= deux;
                
            } 
            if(par(third) == "no") {
                
            }
        }
        second = prompt("should I buy another?");
        //back to the main function
        while(second == "yes"){
            if(uno <= limit && deux >= limit) {
                alert("Oh? Looks like I reached my limit.");
                accessory();
            }
            un -= uno - tax(uno);
            return second;
        }
        if(second == "no"){
            alert("oh well");
        }
    }
}
    

/*function that cycles through commerce-related questions involving the company they want, 
how many phones they want to purchase, any accesories, and updates their spending threshold*/
var questaire = function(start) {
    if(par(start) == "apple"){
        cycle(phone.app, acc.appacc, "iPhone");
        }

    }

alert("b0ss: 'Here's your allowance for the company phones.'");
alert("* hands you " + uno + " dollars.");
alert("b0ss: It's...what we can afford at the time. Use this to purchase the phones you see fit for the employees.");
alert("'Don't be afraid to purchase any accesories for the phones as well, so long as you can afford it ;)'");

//hopefully initiates questaire function.
var begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three.' Where to first?");
questaire(begin);