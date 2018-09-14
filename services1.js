
var module = angular.module('ServiceAppOne', []);

module.service('FruitService', function () {
    //to create unique fruit id
    var uid = 1;
     
    //fruits array to hold list of all fruits
    var fruits = [{
        id: 0,
        'name': 'Apple',
    }];
     
    //save method create a new fruit if not already exists
    //else update the existing object
    this.save = function (fruit) {
        if (fruit.id == null) {
            //if this is new fruit, add it in fruits array
            fruit.id = uid++;
            fruits.push(fruit);
        } else {
            //for existing fruit, find this fruit using id
            //and update it.
            for (i in fruits) {
                if (fruits[i].id == fruit.id) {
                    fruits[i] = fruit;
                }
            }
        }
 
    }
 
    //simply search fruits list for given id
    //and returns the fruit object if found
    this.get = function (id) {
        for (i in fruits) {
            if (fruits[i].id == id) {
                return fruits[i];
            }
        }
 
    }
     
    //iterate through fruits list and delete 
    //fruit if found
    this.deletedata = function (id) {
        for (i in fruits) {
            if (fruits[i].id == id) {
                fruits.splice(i, 1);
            }
        }
    }
 
    //simply returns the fruits list
    this.list = function () {
        return fruits;
    }
});
 
module.controller('FruitController', function ($scope, FruitService) {
 
    $scope.fruits = FruitService.list();
 
    $scope.saveFruit = function () {
        FruitService.save($scope.newfruit);
        $scope.newfruit = {};
    }
 
 
    $scope.deletedata = function (id) {
 
        FruitService.deletedata(id);
        if ($scope.newfruit.id == id) $scope.newfruit = {};
    }
 
})