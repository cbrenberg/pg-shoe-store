const shoeApp = angular.module('ShoeApp', []);

shoeApp.controller('ShoeController', ['$http', function($http) {
  const vm = this;
  
  vm.message = 'Angular loaded!';
  vm.shoeType = '';
  vm.price = '';

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
    }).catch((error) => {
      console.log('Error adding shoes:', error);
    })
  };

  // vm.getShoes = function () {
  //   console.log('in getShoes');
  //   $http({
  //     method: 'POST',
  //     url: '/shoes'
  //     params: {
        
  //     }
  //   })

  // }


}]);