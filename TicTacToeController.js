angular
    .module("ticTacToe")
    .controller("TicTacToeController", TicTacToeController);

function TicTacToeController() {
    var self = this;
    self.makeMove = makeMove;
    self.boxes = [{
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }, {
        avatar: false
    }];

    //function to click any of the Tic Tac Toe cells
    function makeMove(i) {
        console.log(i);
        self.boxes[i].avatar = "true";
        console.log(self.boxes);
    }
}