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
            getMonthsBetweenDates: getMonthsBetweenDates,
            getDates: getDates
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
            });
        }

        function getDates(startDate, endDate) {
            var currentDate = startDate,
                dayNumber,
                dates = [],
                month={weeks:[]},
                monthNumber,
                months=[],
                week={days:new Array(31)},
                weeks=[],
                addDays = function(days) {
                    var date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                };

            monthNumber = currentDate.getMonth();
            dayNumber = currentDate.getDay();

            while (currentDate <= endDate) {
                var newMonth = monthNumber!=currentDate.getMonth(),
                    newWeek = (currentDate.getDay()==0 && dayNumber==6);
                if(newMonth)
                    month={weeks:[]};

                if(newWeek){
                    week={days:new Array(31)};
                }
                //week.days.push(currentDate.getDay());
                week.days[currentDate.getDay()] = currentDate.getDate();
                dates.push(currentDate);

                monthNumber = currentDate.getMonth();
                dayNumber = currentDate.getDay();

                currentDate = addDays.call(currentDate, 1);

                if((currentDate.getDay()==0 && dayNumber==6) || currentDate>endDate){
                    month.weeks.push(week);
                }

                if(monthNumber!=currentDate.getMonth() || currentDate>endDate){
                    month.name = MONTHS[monthNumber].month;
                    months.push(month);
                }
            }
            return months;
        }

        function getDays(date){
            var ndate = new Date(date);
            return ndate.getDate();
        }

        function isLeapYear(year){
            return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        }

        function successGetHolidays(response){
            console.log(response.holidays);
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
