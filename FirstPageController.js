angular
    .module("myModule")
    .controller("FrontPageController", FrontPageController);

FrontPageController.$inject = ['$firebaseObject'];

function FrontPageController($firebaseObject){
    var self = this;
    self.game = syncGameWithFirebase();

    var ref = new Firebase('https://dazzling-inferno-4632.firebaseio.com');
    var gameObject = $firebaseObject(ref);
}
