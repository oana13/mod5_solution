(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

 SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var reg = this;
  var dataa;
 //console.log(reg);

  reg.submit = function (){
     if(reg.user){
      MenuService.getItem(reg.user.shortname).then(function(response){
        console.log(response);
        reg.completed = response;
        MenuService.setName(reg);
      });
    };
  };
}
})();
