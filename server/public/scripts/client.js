const shoeApp = angular.module('ShoeApp', []);

shoeApp.controller('ShoeController', ['$http', function($http) {
  const vm = this;
  
vm.message = 'Angular loaded!';

  vm.addNewShoe = function () {
    console.log('in addNewShoe');
  }
}]);