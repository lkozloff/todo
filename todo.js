function TodoCtrl($scope){
    $scope.todos = [
    {text: 'hello', done: true},
    {text: 'goodbye', done: true},
    {text: 'bonjour', done: true},
   ];

   $scope.addItem = function() {
    $scope.todos.push({text: $scope.item, done: false});
    $scope.item = "";
   };

}
