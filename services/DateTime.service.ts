import moment from 'moment';

const DateTimeService = {
  // Print the date using moment for timezones and format
  printDate(date, formatString) {
    return moment(date).format(formatString);
  },
  // Print the time using moment for timezones and format
  printTime(date) {
    return moment(date).format('HH:mm');
  },
};

export default DateTimeService;
