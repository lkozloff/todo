function TodoCtrl($scope){
   $scope.todos = JSON.parse(localStorage.getItem("todos") || '[]');

   $scope.addItem = function() {
    $scope.todos.push({text: $scope.item, done: false});
    $scope.item = "";
   };

    $scope.clearCompleted = function(){
        var old = $scope.todos;
        $scope.todos=[];
        angular.forEach(old, function(task){
            if(!task.done) $scope.todos.push(task);
        });
    };

    $scope.remove = function(todo){
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index,1);
    };

    $scope.save = function(){
        localStorage.setItem("todos",JSON.stringify($scope.todos));
    };
}
