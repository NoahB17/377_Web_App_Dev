var MINIMUM_BET = 5;
var STARTING_FUNDS = 50;
var point = 0;
var bet = 0;
var winnings = STARTING_FUNDS;
var totalyou=0
var totalcomp=0
var total=0

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    
}

console.log('The shuffled deck:');

for (let i = 0; i < 52; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    console.log(deck[i].Value)
    console.log("fronts/"+deck[0].Suit+"_"+deck[0].Value+".svg")
}
/*
 * Checks the result of the current roll and declare a win, loss, or continuation.
 */
function checkCards(you,dealer) {
        if (you == 21 || you > dealer && you<=21||dealer>=22) {
            endRound(true);
            totalyou=0
            totalcomp=0
        } else if (dealer == 21 || dealer > you && dealer<=21||you>=22) {
            endRound(false);
            totalyou=0
            totalcomp=0
        } else if (dealer == you){
            $("#message").text("its a tie!");
            totalyou=0
            totalcomp=0
        }
    } 

/*
 * Ends the current round of play by either adding/removing the bet to/from the winnings. Also
 * resets game controls to start another round.
 *
 * win - true if the round ended in a win, false otherwise
 */
function endRound(win) {
    // Step 1: Update winnings
    if (win) {
        $("#message").text("You win!");
        winnings += bet;
    } else {
        $("#message").text("You lose!");
        winnings -= bet;
    }

    console.log("Winnings: " + winnings);

    // Step 2: Reset game controls for another round
    
    $("#bet").val("");
    $("#bet").prop("disabled", false);
    $("#winnings").text("$" + winnings);

    bet = 0;
    point = 0;
}

/*
 * Rolls both dice at the same time and checks the results.
 */

ace=1
jack=11
queen=12
king=13
function drawCard() {
    
   draw(deck[0].Value,"you")
   console.log("Total: " + total);
   console.log(totalyou);
   if(totalcomp<=16){
    draw(deck[0].Value,"comp")
    console.log(totalyou);

   }

    // $("#" + card + " ~ .pip").css("visibility", "hidden");
    if (point > 0 || validateBet()) {
        $("#message").text("");
        
        

        console.log("Total: " + total);

    } else {
        if (winnings < MINIMUM_BET) {
            $("#message").text("You don't have enough money to play");
        } else  {
            $("#message").text("Enter a bet between $" + MINIMUM_BET + " and $" + winnings);
        }
    }
}
function noDraw() {
    while(totalcomp<=16){
        draw(deck[0].Value,"comp")

    }
    checkCards(totalyou,totalcomp);

}
function draw(cardnum,player) {
    total=0
    console.log(cardnum);
    $("#card"+player).attr("href","fronts/"+deck[0].Suit+"_"+deck[0].Value+".svg")

        if (cardnum=="ace"){
            total+=Number(1)
            console.log(total);

        }else if(cardnum=="jack"){
            total+=Number(11)
            console.log(total);

        }else if(deck[0].Value=="queen"){
            total+=Number(12)
            console.log(total);

        }else if(cardnum=="king"){
            total+=Number(13)
            console.log(total);

        }else{
        total+=Number(cardnum)
            }
        if(player=="you"){
            totalyou+=total
            $("#total"+player).text(totalyou);
        } else if(player=="comp"){
            totalcomp+=total
            $("#total"+player).text(totalcomp);
        }
        console.log(deck[0].Value);
        

        deck.shift();
        

}

/*
 * This function does two things:
 *
 * 1. Verifies that a valid bet has been entered (a valid bet must be greater than $5 but less than
 *    or equal to the total winnings)
 *
 * 2. Disables the betting controls to prevent the bet from being changed mid-round
 *
 * If the bet is validated then true is returned, false otherwise.
 */
function validateBet() {
    bet = parseInt($("#bet").val());

    console.log("Bet: " + bet);

    if (isNaN(bet) || bet < MINIMUM_BET || bet > winnings) {
        return false;
    } else {
        $("#bet").prop("disabled", true);
        return true;
    }
}
