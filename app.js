(function () {
  "use strict",
    angular.module("myLunch", []).controller("myController", myController);

  myController.$inject = [$scope];
  function myController($scope) {
    $scope.check = "";
    $scope.result = "";
    $scope.message = "";

    $scope.couting = function () {
      var input = $scope.check;
      input = input.trim();
      if (input == "") {
        $scope.message = "Please enter data first";
        $scope.result = "error";
      } else {
        var inputarr = input.split(",");
        for (var i = 0; i < inputarr.length; i++) {
          if (inputarr[i] === "" || inputarr[i] === " ") {
            $scope.message = "Do not consider an empty item";
            $scope.result = "error";
            break;
          } else {
            if (inputarr.length <= 3) {
              $scope.message = "Enjoy!";
              $scope.result = "success";
            } else {
              $scope.message = "Too much!";
              $scope.result = "success";
            }
          }
        }
      }
    };
  }
})();
