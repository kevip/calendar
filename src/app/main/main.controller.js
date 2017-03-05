(function() {
    'use strict';

    angular
        .module('calendar')
        .controller('MainController', MainController);

    /** @ngInject */

    function MainController(Calendar, DAYS, $filter, MONTHS) {
        var vm = this;

        vm.calendar ={};
        vm.generateCalendar = generateCalendar;
        vm.months = [];

        Calendar.getDays(2);

        function generateCalendar(e){
            e.preventDefault();
            var newDate;
            newDate = Calendar.addDays(vm.calendar.start_date, vm.calendar.days_number);

            vm.holidays = Calendar.getHolidays(newDate, vm.calendar.country_code);
            vm.months = Calendar.getDates(new Date(vm.calendar.start_date), newDate);

        }


    }
})();
