(function ()
{ "use strict";

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath)
  { var service = this;
    //var info;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getItem = function(short){
      var dat;
      //var info;
      return $http.get(ApiPath + '/menu_items/' + short + '.json').then
      (function (response)
      {dat = response.data;
       if (dat)

          {if (dat.short_name == short)
              {service.info = dat;
                console.log(service.info);
                 return true;
              }
              else {return false;}
           }
      }).catch(function(error){return false;});
    };

    service.setName = function (form){
      service.person = form;
      service.path = ApiPath;
    };
};
})();
