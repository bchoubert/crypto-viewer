import candleGranularity, { CandleType } from '../../models/CandleGranularity';
import NetworkService, { apiDomain, apiProDomain } from '../../services/Network.service';

const urlMocks = {
  '/currencies': 'fetchCryptos',
  '/exchange-rates': 'fetchCryptoExchangeRates',
  '/stats': 'fetchCrypto24hrStats',
  '/buy': 'fetchCryptoBuyPrice',
  '/sell': 'fetchCryptoSellPrice',
  '/candles': 'fetchCryptoHistoricRates',
};

describe('NetworkService', () => {
  let fetchMock = null;

  let candleStartDateFn = null;
  const candleStartDateMockValue = '2021-01-01';

  let candleEndDateFn = null;
  const candleEndDateMockValue = '2021-03-01';

  const candleGranularityToMock: CandleType = '6M';

  beforeAll(() => {
    fetchMock = jest.fn((url: string) => new Promise((resolve) => {
      resolve({
        json: () => ({
          url,
          function: urlMocks[Object.keys(urlMocks)
            .find((urlMockKey: string) => url.includes(urlMockKey))],
        }),
      });

      jest.spyOn(candleGranularity[candleGranularityToMock], 'getStartDate');
      jest.spyOn(candleGranularity[candleGranularityToMock], 'getEndDate');

      candleStartDateFn = jest.fn(() => candleStartDateMockValue);
      candleEndDateFn = jest.fn(() => candleEndDateMockValue);

      (candleGranularity[candleGranularityToMock].getStartDate as unknown as jest.Mock)
        .mockImplementation(candleStartDateFn);

      (candleGranularity[candleGranularityToMock].getEndDate as unknown as jest.Mock)
        .mockImplementation(candleEndDateFn);
    }));

    // https://rishabhsrao.medium.com/mocking-and-testing-fetch-with-jest-c4d670e2e167
    (global.fetch as unknown as jest.Mock) = fetchMock;
  });

  it('fetchCryptos', async () => {
    const res = await NetworkService.fetchCryptos();
    expect(res).toEqual({
      url: `${apiProDomain}/currencies`,
      function: 'fetchCryptos',
    });
  });

  it('fetchCryptoExchangeRates', async () => {
    const quoteCode = 'USD';
    const res = await NetworkService.fetchCryptoExchangeRates(quoteCode);
    expect(res).toEqual({
      url: `${apiDomain}/exchange-rates?currency=${quoteCode}`,
      function: 'fetchCryptoExchangeRates',
    });
  });

  it('fetchCrypto24hrStats', async () => {
    const crypto = 'BTC';
    const quoteCode = 'USD';
    const res = await NetworkService.fetchCrypto24hrStats(crypto, quoteCode);
    expect(res).toEqual({
      url: `${apiProDomain}/products/${crypto.toUpperCase()}-${quoteCode.toUpperCase()}/stats`,
      function: 'fetchCrypto24hrStats',
    });
  });

  it('fetchCryptoBuyPrice', async () => {
    const crypto = 'BTC';
    const quoteCode = 'USD';
    const res = await NetworkService.fetchCryptoBuyPrice(crypto, quoteCode);
    expect(res).toEqual({
      url: `${apiDomain}/prices/${crypto.toUpperCase()}-${quoteCode.toUpperCase()}/buy`,
      function: 'fetchCryptoBuyPrice',
    });
  });

  it('fetchCryptoSellPrice', async () => {
    const crypto = 'BTC';
    const quoteCode = 'USD';
    const res = await NetworkService.fetchCryptoSellPrice(crypto, quoteCode);
    expect(res).toEqual({
      url: `${apiDomain}/prices/${crypto.toUpperCase()}-${quoteCode.toUpperCase()}/sell`,
      function: 'fetchCryptoSellPrice',
    });
  });

  it('fetchCryptoHistoricRates', async () => {
    const crypto = 'BTC';
    const quoteCode = 'USD';
    const res = await NetworkService.fetchCryptoHistoricRates(
      crypto,
      quoteCode,
      candleGranularityToMock,
    );

    expect(candleStartDateFn).toHaveBeenCalledTimes(0);
    expect(candleEndDateFn).toHaveBeenCalledTimes(0);

    expect(res).toEqual({
      url: `${
        `${apiProDomain}/products/${crypto.toUpperCase()}-${quoteCode.toUpperCase()}/candles`}${
        ''}?granularity=${candleGranularity[candleGranularityToMock].granularity}&end=${candleEndDateMockValue}&start=${candleStartDateMockValue}`,
      function: 'fetchCryptoHistoricRates',
    });
  });

  afterAll(() => {

  });
});
