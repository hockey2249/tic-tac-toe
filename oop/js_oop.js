var normalGame = new Game('X', 'O');
var display = 'X';
var boxColor = "red";

function Game (player1Name, player2Name) {
  this.board = new Board();
  this.player1 = new Player(player1Name);
  this.player2 = new Player(player2Name);
  this.currentUser = this.player1;
  
  this.start = function() {
	message(this.currentUser + ", please make your move first.");
  };

  this.message = function() {
    document.getElementById("messages").textContent = mess;
  };
  this.switchTurn = function() {
  	 if(checkForWinner(display)){
		message("Congratulations, " + display + "! You win!");
		winner = display;
		alert(display + ", you won! Please don't click any more spaces.");
	}else if (display == 'X'){
		display = 'O';
		boxColor = "blue";
		message(display + ", please make your move.");
	} else {
		display = 'X';
		message(display + ", please make your move.");
		boxColor = "red";
	}
	message.textContent = display + " goes!";
};
}

Game.prototype.start = function() {
	var display = 'X';	
	message(display + ", please make your move first.");
  };

Game.prototype.message = function(mess) {
    document.getElementById("messages").textContent = mess;
};

Game.prototype.switchTurn = function() {
  	if(checkForWinner(display)){
		message("Congratulations, " + display + "! You win!");
		winner = display;
		alert(display + ", you won! Please don't click any more spaces.");
	}else if (display == 'X'){
		display = 'O';
		boxColor = "blue";
		message(display + ", please make your move.");
	} else {
		display = 'X';
		message(display + ", please make your move.");
		boxColor = "red";
	}
	message.textContent = display + " goes!";
};

Game.prototype.makeMove = function() {
	if (box.textContent == ''){
		box.textContent = display;
		box.style.backgroundColor = boxColor;
		switchTurn();
	}else {
		message('Please choose another square, this square is already taken!');
	}
};

function Player(name) {
  this.name = name;
}
function Board () {
  this.board = {
    s1: document.querySelector('#s1'),
    s2: document.querySelector('#s2'),
    s3: document.querySelector('#s3'),
    s4: document.querySelector('#s4'),
    s5: document.querySelector('#s5'),
    s6: document.querySelector('#s6'),
    s7: document.querySelector('#s7'),
    s8: document.querySelector('#s8'),
    s9: document.querySelector('#s9'),
  };
}

Board.prototype.checkForWinner = function(allow) {
	var result = false;
	
	if( checkRow(1,2,3, allow) || 
		checkRow(4,5,6, allow) || 
		checkRow(7,8,9, allow) ||
		checkRow(1,4,7, allow) ||
		checkRow(2,5,8, allow) ||
		checkRow(3,6,9, allow) ||
		checkRow(1,5,9, allow) ||
		checkRow(3,5,7, allow)) {
		
		result = true;
	}
	return result;
};

Board.prototype.checkRow = function(a, b, c, allow) {
	var result = false;
	if(getBox(a) == allow && getBox(b) == allow && getBox(c) == allow) {
		result = true;
	}
	return result;
};

Board.prototype.getBox = function(number) {
	return document.getElementById("s" + number).textContent;
};
Board.prototype.reset = function() {
	var gameBoxes = document.getElementsByClassName("box");
		for (var i = 0; i < gameBoxes.length; i++){
			gameBoxes[i].style.backgroundColor='purple';
			gameBoxes[i].innerHTML= '';
	}
		return start();		
};
