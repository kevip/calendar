(function() {
  'use strict';

  angular
    .module('calendar')
    .controller('MainController', MainController);

  /** @ngInject */

  function MainController(Calendar) {
      var vm = this;

      vm.calendar ={};
      vm.generateCalendar = generateCalendar;

      Calendar.getDays(2);

      function generateCalendar(e){
          e.preventDefault();
          Calendar.generateCalendar(vm.calendar.start_date, vm.calendar.days_number, vm.calendar.country_code);
      }

  }
})();
