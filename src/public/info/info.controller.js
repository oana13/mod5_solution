(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

 InfoController.$inject = ['MenuService'];
function InfoController(MenuService) {
  var reg = this;
  var dataa, data, path;

dataa = MenuService.info;
data = MenuService.person;
path = MenuService.path;

reg.info = dataa;
reg.person = data;
reg.path = path;
reg.registered = false;
if(dataa){
  //console.log(reg.info.short_name);
  console.log(reg);
  reg.registered = true;
}
  };
})();
