angular
  .module("ticTacToe")
  .controller("TicTacToeController", TicTacToeController);

TicTacToeController.$inject = ['$firebaseObject'];

function TicTacToeController($firebaseObject) {
  var self  =this;
  self.game = syncGameWithFirebase();
  
  function syncGameWithFirebase(){
      var ref = new Firebase('https://dazzling-inferno-4632.firebaseio.com');
      var gameObject = $firebaseObject(ref);

/////////////////////////////////////////////////////////////////////
      //setting global variables

      gameObject.$loaded(function(){

        gameObject.winYesOrNo = false;
        gameObject.playerOneScore = 0;
        gameObject.playerTwoScore = 0;
        gameObject.winner = "";
        gameObject.playAgain = "Play Again?";

/////////////////////////////////////////////////////////////////////
        //definition of the box array.
        gameObject.boxes = [{
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }];
        gameObject.turnNum = 0;
        gameObject.$save();
      });  

      return gameObject;
  }

  // gameObject.formInfo = {};
  //   function saveData(){
  //     self.game.$save();
  //   }

  
////////////////////////////////////////////////////////////////////
  //linking functions to self.
  self.makeMove = makeMove;
  self.findWinner = findWinner;
  // self.setPlayerSide = setPlayerSide;
  self.startOver = startOver;
  self.tieTester = tieTester;
  self.winnerYet = winnerYet;

  
/////////////////////////////////////////////////////////////////////
  //function definitions
  //function to click any of the Tic Tac Toe cells
  function makeMove(boxNum) {
    //First check to see if there is a winner. If yes, then move ahead. If no, then stop.
    if(self.game.winYesOrNo===true){
      // Make sure we don't make a move where one has already been made!
      return;
      }else{
       if (self.game.boxes[boxNum].avatar !== 0)
        return;
      self.game.boxes[boxNum].avatar = ((self.game.turnNum % 2) === 0 ? 1 : 2);
      self.findWinner();
      self.winnerYet();
      self.tieTester();
      self.game.turnNum++;
      // self.setPlayerSide();
      self.game.$save();
    } 
  }
  
/////////////////////////////////////////////////////////////////////
  function findWinner() {
      if ((self.game.boxes[0].avatar === 1) && (self.game.boxes[1].avatar === 1) && (self.game.boxes[2].avatar === 1)) {
        self.game.winner = "Player 1 wins horizontally.\r Play again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[3].avatar === 1) && (self.game.boxes[4].avatar === 1) && (self.game.boxes[5].avatar === 1)) {
        self.game.winner = "Player 1 wins horizontally.'<&#13>'Play again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[6].avatar === 1) && (self.game.boxes[7].avatar === 1) && (self.game.boxes[8].avatar === 1)) {
        self.game.winner = "Player 1 wins horizontally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[0].avatar === 1) && (self.game.boxes[3].avatar === 1) && (self.game.boxes[6].avatar === 1)) {
        self.game.winner = "Player 1 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[1].avatar === 1) && (self.game.boxes[4].avatar === 1) && (self.game.boxes[7].avatar === 1)) {
        self.game.winner = "Player 1 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[2].avatar === 1) && (self.game.boxes[5].avatar === 1) && (self.game.boxes[8].avatar === 1)) {
        self.game.winner = "Player 1 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[0].avatar === 1) && (self.game.boxes[4].avatar === 1) && (self.game.boxes[8].avatar === 1)) {
        self.game.winner = "Player 1 wins diagonally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[2].avatar === 1) && (self.game.boxes[4].avatar === 1) && (self.game.boxes[6].avatar === 1)) {
        self.game.winner = "Player 1 wins diagonally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerOneScore = self.game.playerOneScore + 1;
      } else if ((self.game.boxes[0].avatar === 2) && (self.game.boxes[1].avatar === 2) && (self.game.boxes[2].avatar === 2)) {
        self.game.winner = "Player 2 wins horizontally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[3].avatar === 2) && (self.game.boxes[4].avatar === 2) && (self.game.boxes[5].avatar === 2)) {
        self.game.winner = "Player 2 wins horizontally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[6].avatar === 2) && (self.game.boxes[7].avatar === 2) && (self.game.boxes[8].avatar === 2)) {
        self.game.winner = "Player 2 wins horizontally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[0].avatar === 2) && (self.game.boxes[3].avatar === 2) && (self.game.boxes[6].avatar === 2)) {
        self.game.winner = "Player 2 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[1].avatar === 2) && (self.game.boxes[4].avatar === 2) && (self.game.boxes[7].avatar === 2)) {
        self.game.winner = "Player 2 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[2].avatar === 2) && (self.game.boxes[5].avatar === 2) && (self.game.boxes[8].avatar === 2)) {
        self.game.winner = "Player 2 wins vertically.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[0].avatar === 2) && (self.game.boxes[4].avatar === 2) && (self.game.boxes[8].avatar === 2)) {
        self.game.winner = "Player 2 wins diagonally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      } else if ((self.game.boxes[2].avatar === 2) && (self.game.boxes[4].avatar === 2) && (self.game.boxes[6].avatar === 2)) {
        self.game.winner = "Player 2 wins diagonally.\nPlay again?";
        self.game.winYesOrNo = true;
        self.game.playerTwoScore = self.game.playerTwoScore + 1;
      }
      return self.game.winner, self.game.playerOneScore, self.game.playerTwoScore, "Play again";
    } //end findwinner function

////////////////////////////////////////////////////////////////////
      // function setPlayerSide(){
      //   if(self.game.turnNum === 1){
      //     self.localPlayer = 1;
      //     self.game.turnNum = 2;
      //   } else if (self.game.turnNum === 2){
      //     self.localPlayer = 2;
      //     self.game.turnNum = 1;
      //   }
      //   self.game.$save();
      // }

      function startOver(clearIt){
      self.game.boxes = [{
        avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
        }, {
          avatar: 0
      }];
      if(clearIt) {
        self.game.playerOneScore = 0;
        self.game.playerTwoScore = 0;
      }
      self.game.winYesOrNo = false;
      self.game.winner = "";
      self.game.$save();
      }

      function tieTester(){
        if(self.game.boxes[0].avatar !==0 && self.game.boxes[1].avatar !==0 && self.game.boxes[2].avatar !==0 && self.game.boxes[3].avatar !==0 && self.game.boxes[4].avatar !==0 && self.game.boxes[5].avatar !==0 && self.game.boxes[6].avatar !==0 && self.game.boxes[7].avatar !==0 && self.game.boxes[8].avatar !==0 && self.game.winYesOrNo !== true){
          self.game.winner = "Tie Game.  Play again?";
          }
        }

  function winnerYet() {
    if (self.game.winYesOrNo === true) {
      return self.winner;
    } else {
      return;
    }
  }


  //end controller function
}