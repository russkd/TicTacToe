angular
  .module("ticTacToe")
  .controller("TicTacToeController", TicTacToeController);

function TicTacToeController() {
  var self = this;
  var winYesOrNo = false;
  self.playerOneScore = 0;
  self.playerTwoScore = 0;
  self.winner = "";
  self.makeMove = makeMove;
  self.playAgain = playAgain;
  self.findWinner = findWinner;
  self.startOver = startOver;
  self.winnerYet = winnerYet;
  self.boxes = [{
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

  var turnNum = 0;
  //function to click any of the Tic Tac Toe cells
  function makeMove(boxNum) {
    //First check to see if there is a winner. If yes, then move ahead. If no, then stop.
    if(winYesOrNo===true){
      // Make sure we don't make a move where one has already been made!
      return;
      }else{
       if (self.boxes[boxNum].avatar !== 0)
        return;
      self.boxes[boxNum].avatar = ((turnNum % 2) === 0 ? 1 : 2);
      findWinner();
      winnerYet();
      tieTester();
      turnNum++;
    } 
  }
  

  function findWinner() {
      if ((self.boxes[0].avatar === 1) && (self.boxes[1].avatar === 1) && (self.boxes[2].avatar === 1)) {
        self.winner = "Player 1 wins horizontally";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[3].avatar === 1) && (self.boxes[4].avatar === 1) && (self.boxes[5].avatar === 1)) {
        self.winner = "Player 1 wins horizontally";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[6].avatar === 1) && (self.boxes[7].avatar === 1) && (self.boxes[8].avatar === 1)) {
        self.winner = "Player 1 wins horizontally";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[0].avatar === 1) && (self.boxes[3].avatar === 1) && (self.boxes[6].avatar === 1)) {
        self.winner = "Player 1 wins vertically";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[1].avatar === 1) && (self.boxes[4].avatar === 1) && (self.boxes[7].avatar === 1)) {
        self.winner = "Player 1 wins vertically";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[2].avatar === 1) && (self.boxes[5].avatar === 1) && (self.boxes[8].avatar === 1)) {
        self.winner = "Player 1 wins vertically";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[0].avatar === 1) && (self.boxes[4].avatar === 1) && (self.boxes[8].avatar === 1)) {
        self.winner = "Player 1 wins diagonally";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[2].avatar === 1) && (self.boxes[4].avatar === 1) && (self.boxes[6].avatar === 1)) {
        self.winner = "Player 1 wins diagonally";
        winYesOrNo = true;
        self.playerOneScore = self.playerOneScore + 1;
      } else if ((self.boxes[0].avatar === 2) && (self.boxes[2].avatar === 2) && (self.boxes[2].avatar === 2)) {
        self.winner = "Player 2 wins horizontally";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[3].avatar === 2) && (self.boxes[4].avatar === 2) && (self.boxes[5].avatar === 2)) {
        self.winner = "Player 2 wins horizontally";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[6].avatar === 2) && (self.boxes[7].avatar === 2) && (self.boxes[8].avatar === 2)) {
        self.winner = "Player 2 wins horizontally";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[0].avatar === 2) && (self.boxes[3].avatar === 2) && (self.boxes[6].avatar === 2)) {
        self.winner = "Player 2 wins vertically";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[1].avatar === 2) && (self.boxes[4].avatar === 2) && (self.boxes[7].avatar === 2)) {
        self.winner = "Player 2 wins vertically";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[2].avatar === 2) && (self.boxes[5].avatar === 2) && (self.boxes[8].avatar === 2)) {
        self.winner = "Player 2 wins vertically";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[0].avatar === 2) && (self.boxes[4].avatar === 2) && (self.boxes[8].avatar === 2)) {
        self.winner = "Player 2 wins diagonally";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      } else if ((self.boxes[2].avatar === 2) && (self.boxes[4].avatar === 2) && (self.boxes[6].avatar === 2)) {
        self.winner = "Player 2 wins diagonally";
        winYesOrNo = true;
        self.playerTwoScore = self.playerTwoScore + 1;
      }
      return self.winner, self.playerOneScore, self.playerTwoScore;

    } //end findwinner function

    function playAgain(){
      self.boxes = [{
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
        winYesOrNo = false;
        self.winner = "";
      }

      function startOver(){
      self.boxes = [{
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
      self.playerOneScore = 0;
      self.playerTwoScore = 0;
      winYesOrNo = false;
      self.winner = "";
      }

      function tieTester(){
        if(self.boxes[0].avatar !==0 && self.boxes[1].avatar !==0 && self.boxes[2].avatar !==0 && self.boxes[3].avatar !==0 && self.boxes[4].avatar !==0 && self.boxes[5].avatar !==0 && self.boxes[6].avatar !==0 && self.boxes[7].avatar !==0 && self.boxes[8].avatar !==0 && winYesOrNo !== true){
          self.winner = "Tie Game";
          }
        }

  function winnerYet() {
    if (winYesOrNo === true) {
      return self.winner;
    } else {
      return;
    }
  }


  //end controller function
}