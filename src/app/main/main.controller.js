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
          var newDate;
          e.preventDefault();

          newDate = Calendar.addDays(vm.calendar.start_date, vm.calendar.days_number);

          vm.holidays = Calendar.getHolidays(newDate, vm.calendar.country_code);

      }

  }
})();
