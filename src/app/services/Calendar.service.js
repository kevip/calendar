(function() {
    'use strict';

    angular
        .module('calendar')
        .factory('Calendar', Calendar);

    function Calendar(MONTHS, DAYS, Holiday, LIVE_API_KEY, TEST_API_KEY, toastr){

        return {
            addDays: addDays,
            getDays: getDays,
            isLeapYear: isLeapYear,
            generateCalendar: generateCalendar,
            getHolidays: getHolidays,
            getMonthsBetweenDates: getMonthsBetweenDates
        };

        function addDays(start_date, days_number){
            var date = new Date(start_date);
            days_number = typeof days_number === "undefined"?0:days_number;
            date.setDate(date.getDate() + days_number);
            return date;
        }

        function errorGetHolidays(error){
            console.log(error);
            toastr.error(error.data.error);
        }

        function generateCalendar(start_date, days_number, country_code){
            var newDate = addDays(start_date, days_number);
            return newDate;

        }

        function getHolidays(newDate, country_code){
            return Holiday.all({
                key: TEST_API_KEY,
                country: country_code,
                year: newDate.getFullYear()
            }).$promise.then(successGetHolidays, errorGetHolidays);
        }

        function getDays(date){
            var ndate = new Date(date);
            return ndate.getDate();
        }

        function isLeapYear(year){
            return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        }

        function successGetHolidays(response){
            return response.holidays;
        }

        function getMonthsBetweenDates(date1, date2) {
            var months;
            months= (date2.getFullYear() - date1.getFullYear()) * 12;
            months-= date1.getMonth() + 1;
            months+= date2.getMonth() +1; // we should add + 1 to get correct month number
            return months <= 0 ? 0 : months;
        }
    }

})();
