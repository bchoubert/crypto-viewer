/* eslint-disable no-console */
import LoggerService from '../../services/Logger.service';

describe('LoggerService', () => {
  const consoleOriginals = {
    error: null,
    warn: null,
    log: null,
  };

  const consoleMocks = {
    error: null,
    warn: null,
    log: null,
  };

  beforeAll(() => {
    consoleOriginals.error = console.error;
    consoleOriginals.warn = console.warn;
    consoleOriginals.log = console.log;

    consoleMocks.error = jest.fn();
    consoleMocks.warn = jest.fn();
    consoleMocks.log = jest.fn();

    console.error = consoleMocks.error;
    console.warn = consoleMocks.warn;
    console.log = consoleMocks.log;
  });

  it('Error', () => {
    expect(consoleMocks.error).toHaveBeenCalledTimes(0);
    expect(consoleMocks.warn).toHaveBeenCalledTimes(0);
    expect(consoleMocks.log).toHaveBeenCalledTimes(0);

    LoggerService.error('TEST ERROR');

    expect(consoleMocks.error).toHaveBeenCalledTimes(1);
    expect(consoleMocks.warn).toHaveBeenCalledTimes(0);
    expect(consoleMocks.log).toHaveBeenCalledTimes(0);

    expect(consoleMocks.error).toHaveBeenCalledWith('TEST ERROR');
  });

  it('Warn', () => {
    LoggerService.warn('TEST WARN');

    expect(consoleMocks.error).toHaveBeenCalledTimes(1);
    expect(consoleMocks.warn).toHaveBeenCalledTimes(1);
    expect(consoleMocks.log).toHaveBeenCalledTimes(0);

    expect(consoleMocks.warn).toHaveBeenCalledWith('TEST WARN');
  });

  it('Log', () => {
    LoggerService.log('TEST LOG');

    expect(consoleMocks.error).toHaveBeenCalledTimes(1);
    expect(consoleMocks.warn).toHaveBeenCalledTimes(1);
    expect(consoleMocks.log).toHaveBeenCalledTimes(1);

    expect(consoleMocks.log).toHaveBeenCalledWith('TEST LOG');
  });

  afterAll(() => {
    console.error = consoleOriginals.error;
    console.warn = consoleOriginals.warn;
    console.log = consoleOriginals.log;
  });
});
