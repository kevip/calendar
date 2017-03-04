(function() {
    'use strict';

    angular
        .module('calendar')
        .factory('Calendar', Calendar);

    function Calendar(MONTHS, DAYS){
        var newDate={
            month:null, day:null, year:null
        };

        return {
            getDays: getDays,
            isLeapYear: isLeapYear,
            generateCalendar: generateCalendar
        };

        function addDays(start_date, days_number, country_code){

            var date = new Date(start_date),
                day,
                month,
                year;

            day = date.getDate();
            month = date.getMonth();
            year = date.getFullYear();

            for(var i=0; i<days_number; i++){
                day += 1;
                if(month == 1 && isLeapYear(year)){
                    //if is leap year we add 1 day to february
                    if(MONTHS[month].days+1<day) {
                        month= month<11?month+1:1;
                    }
                }
                if(MONTHS[month].days<day) {
                    month= month<11?month+1:1;
                }
            }
        }

        function generateCalendar(start_date, days_number, country_code){
            addDays(start_date, days_number, country_code);
        }

        function getDays(e){
            console.log(e);
        }

        function isLeapYear(year){
            return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        }

    }

})();
