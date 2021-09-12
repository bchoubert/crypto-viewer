import candleGranularity, { CandleType } from '../../models/CandleGranularity';

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

describe('CandleGranularity', () => {
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  it('6M', () => {
    const past6MonthsDate = new Date();
    past6MonthsDate.setMonth(past6MonthsDate.getMonth() - 6);

    expect(candleGranularity['6M' as CandleType].getStartDate()).toEqual(formatDate(past6MonthsDate));
    expect(candleGranularity['6M' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });

  it('3M', () => {
    const past3MonthsDate = new Date();
    past3MonthsDate.setMonth(past3MonthsDate.getMonth() - 3);

    expect(candleGranularity['3M' as CandleType].getStartDate()).toEqual(formatDate(past3MonthsDate));
    expect(candleGranularity['3M' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });

  it('1M', () => {
    const past1MonthDate = new Date();
    past1MonthDate.setMonth(past1MonthDate.getMonth() - 1);

    expect(candleGranularity['1M' as CandleType].getStartDate()).toEqual(formatDate(past1MonthDate));
    expect(candleGranularity['1M' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });

  it('1W', () => {
    const past1WeekDate = new Date();
    past1WeekDate.setDate(past1WeekDate.getDate() - 7);

    expect(candleGranularity['1W' as CandleType].getStartDate()).toEqual(formatDate(past1WeekDate));
    expect(candleGranularity['1W' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });

  it('3D', () => {
    const past3DaysDate = new Date();
    past3DaysDate.setDate(past3DaysDate.getDate() - 3);

    expect(candleGranularity['3D' as CandleType].getStartDate()).toEqual(formatDate(past3DaysDate));
    expect(candleGranularity['3D' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });

  it('1D', () => {
    const past1DayDate = new Date();
    past1DayDate.setDate(past1DayDate.getDate() - 1);

    expect(candleGranularity['1D' as CandleType].getStartDate()).toEqual(formatDate(past1DayDate));
    expect(candleGranularity['1D' as CandleType].getEndDate()).toEqual(formatDate(tomorrowDate));
  });
});
