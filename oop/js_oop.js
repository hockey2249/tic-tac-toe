function Player (player, boxColor) {
    this.player = player;
    this.boxColor = boxColor;        
}
function Game(){
    this.theBoxes = document.getElementsByClassName("box"); 
    this.count = 0;
    this.player1 = new Player("x", "green");
    this.player2 = new Player("o", "blue");

Game.prototype.init = function(){
for (var i = 0; i < this.theBoxes.length; i++){
    this.theBoxes[i].addEventListener("click", this.turn.bind(this));
    }
};
Game.prototype.turn = function(){
    console.log(this.checkForWinner());
    if (!this.checkForWinner()){
        this.count += 1;
    if(event.target.textContent.length === 0){
        if (this.count%2 !== 0 ){
            event.target.textContent= this.player1.player;
               event.target.style.backgroundColor = this.player1.boxColor;
        } else {
            event.target.textContent = this.player2.player;
            event.target.style.backgroundColor = this.player2.boxColor;
        }    
    }
    if (this.checkForWinner()){
        var messageEl = document.querySelector('#messages');
        if(messageEl){
            messageEl.textContent = "You are the Winner!!!";
        }
    } 
    }
};
}
Game.prototype.getBox = function(number) {
    return document.getElementById("s" + number).textContent;
};
Game.prototype.checkRow = function(a, b, c) {
    if(this.getBox(a) && this.getBox(b) && this.getBox(c) && this.getBox(a) === this.getBox(b)&& this.getBox(b)=== this.getBox(c)) {
        return true;
    }
    return false;
};
Game.prototype.checkForWinner = function() {
    if( this.checkRow(1,2,3) || 
        this.checkRow(4,5,6) || 
        this.checkRow(7,8,9) ||
        this.checkRow(1,4,7) ||
        this.checkRow(2,5,8) ||
        this.checkRow(3,6,9) ||
        this.checkRow(1,5,9) ||
        this.checkRow(3,5,7)) {
        
        return true;
    }
    return false;
};
function init(){
    console.log("Main init function");
    var myGame = new Game();
    myGame.init();

    document.getElementById("playAgain").addEventListener("click", clearBoard);
    function clearBoard(){
        myGame.theBoxes = document.getElementsByClassName("box");
        for(var i = 0; i < myGame.theBoxes.length; i++)  {
           myGame.theBoxes[i].textContent ="";
           myGame.theBoxes[i].style.backgroundColor = "white";
    }
    document.querySelector('#messages').textContent = "";
    }
}
window.onload = init;

