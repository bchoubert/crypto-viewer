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
    expect(DateTimeService.printTime('2020-02-25T21:02:55.5555Z')).toEqual('22:02');
    expect(DateTimeService.printTime('2020-01-01T00:00:00.0000Z')).toEqual('01:00');
    expect(DateTimeService.printTime('2020-12-31T22:59:59.9999Z')).toEqual('23:59');
  });
});
