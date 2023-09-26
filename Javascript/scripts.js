function testArray(){
    var grades = [79,80,100,94,83,92]

    document.getElementById('grades').innerHTML="your grades are:"+grades;

    var total=0;
    for (var i= 0; i < grades.length; i++ ) {
        total+=grades[i]
    }
    var average=total/grades.length;

    document.getElementById('average').innerHTML="your average is:"+ average;

}

function dealCard(){
    var deck=getDeckOfCards();

    var card=deck[Math.floor(Math.random()*deck.length)]
    document.getElementById('card').innerHTML= "your card is the "+ card.rank+" of "+card.suit;
}

function getDeckOfCards(){
    var deck=[];
    for (var rank = 1; rank <= 13; rank++){

    

    // var rank= Math.floor(Math.random()*13)+1;
    // var suit=Math.floor(Math.random()*4)+1;
        for (var suit = 1;suit <= 4; suit++){
            var suittext="";
            if(suit==1){
                suittext="Hearts";
            }else if(suit==2){
                suittext="Diamonds";

            }else if(suit==3){
                suittext="Spades";

            }else{
                suittext="Clubs";

            }
            var card={'rank':rank,'suit':suittext};

            deck.push(card);
        }

    }
    return deck;
}