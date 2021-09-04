/* eslint-disable no-console */
const consoleMocker = {
  consoleError: null,

  errorsToSuppress: [
    'Failed prop type',
  ],

  mockConsole: () => {
    consoleMocker.consoleError = console.error;
    console.error = (message: string) => {
      let printMessage = true;

      consoleMocker.errorsToSuppress.forEach((errorToSuppress: string) => {
        if (message.includes(errorToSuppress)) {
          printMessage = false;
        }
      });

      if (printMessage) {
        consoleMocker.consoleError?.(message);
      }
    };
  },

  restoreConsole: () => {
    if (consoleMocker.consoleError) {
      console.error = consoleMocker.consoleError;
    }
  },
};

export default consoleMocker;
