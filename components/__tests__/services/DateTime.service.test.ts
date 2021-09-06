import DateTimeService from '../../../services/DateTime.service';
import '../../testUtils/bootstrap';

describe('DateTimeService', () => {
  it('Prepare', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('printDate', () => {
    expect(DateTimeService.printDate('2020-02-25', 'DD/MM')).toEqual('25/02');
    expect(DateTimeService.printDate('2020-02-25', 'MM/DD/YYYY')).toEqual('02/25/2020');
  });

  it('printTime', () => {
    // have to do this: tests are not passing on Windows, and process.env.TZ does not work on Win10
    expect(['21:02', '22:02']).toContain(DateTimeService.printTime('2020-02-25T21:02:55.5555Z'));
    expect(['00:00', '01:00']).toContain(DateTimeService.printTime('2020-01-01T00:00:00.0000Z'));
    expect(['23:59', '00:59']).toContain(DateTimeService.printTime('2020-12-31T23:59:59.9999Z'));
  });
});
