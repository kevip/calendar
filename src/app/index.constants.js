/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('calendar')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
      .constant('TEST_API_KEY', '7cc2a178-ec67-4d92-b75b-8db019b56e7b')
      .constant('LIVE_API_KEY', 'c0f05e91-ce7d-4ad6-8f8a-9e331ba2a6ac')
      .constant('API_PATH', 'https://holidayapi.com/v1/holidays')
      .constant('DAYS',['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .constant('MONTHS',[
          {
              month: 'January',
              days:31
          },
          {
              month: 'February',
              days:28
          },
          {
              month: 'March',
              days:31
          },
          {
              month: 'April',
              days:30
          },
          {
              month: 'May',
              days:31
          },
          {
              month: 'June',
              days:30
          },
          {
              month: 'July',
              days:31
          },
          {
              month: 'August',
              days:31
          },
          {
              month: 'September',
              days:30
          },
          {
              month: 'October',
              days:31
          },
          {
              month: 'November',
              days:30
          },
          {
              month: 'December',
              days:31
          }
      ])
  ;

})();
