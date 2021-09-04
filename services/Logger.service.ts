/* eslint-disable no-console */
const LoggerService = {
  warn: (...props) => console.warn(...props),
  log: (...props) => console.log(...props),
  error: (...props) => console.error(...props),
};

export default LoggerService;
