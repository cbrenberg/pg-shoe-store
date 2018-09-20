const shoeApp = angular.module('ShoeApp', []);

shoeApp.controller('ShoeController', ['$http', function($http) {
  const vm = this;
  
  vm.shoeType = '';
  vm.price = '';
  vm.shoeList = [];

  vm.addNewShoe = function () {
    console.log('in addNewShoe');
    $http({
      method: 'POST',
      url: '/shoes',
      data: {
        "name": vm.shoeType,
        "cost": vm.price
      }
    }).then((response) => {
      console.log('Back from /POST:', response);
      vm.getShoes();
    }).catch((error) => {
      console.log('Error adding shoes:', error);
    })
  };

  vm.getShoes = function () {
    console.log('in getShoes');
    $http({
      method: 'GET',
      url: '/shoes'
    }).then((response) => {
      console.log('Back from GET with:', response);
      vm.shoeList = response.data;
    }).catch((error) => {
      console.log('Error getting shoes:', error);
    })
  }
  //get shoe list on page load
  vm.getShoes();


}]);