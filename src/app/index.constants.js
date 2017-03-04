/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('calendar')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
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
