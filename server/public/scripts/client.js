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
    }).then(function (response) {
      console.log('Back from /POST:', response);
      vm.getShoes();
    }).catch(function (error) {
      console.log('Error adding shoes:', error);
    })
  };

  vm.getShoes = function () {
    console.log('in getShoes');
    $http({
      method: 'GET',
      url: '/shoes',
      params: {sort: vm.order}
    }).then(function (response) {
      console.log('Back from GET with:', response);
      vm.shoeList = response.data;
    }).catch(function (error) {
      console.log('Error getting shoes:', error);
    })
  }

  vm.deleteShoes = function (shoeObject) {
    console.log('in deleteShoes', shoeObject);
    $http({
      method: 'DELETE',
      url: '/shoes',
      params: shoeObject
    }).then(function (response) {
      console.log('Back from delete', response);
      vm.getShoes();
    }).catch(function (error) {
      console.log('Error deleting shoes:', error);
    });
  }
  //get shoe list on page load
  vm.getShoes();


}]);