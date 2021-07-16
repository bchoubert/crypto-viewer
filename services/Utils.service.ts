// Generic usage service
const UtilsService = {
  // Sort function to order string inside arrays / Objects
  sortFnOnStringProperty(prop1, prop2, property) {
    if (prop1[property].toLowerCase() < prop2[property].toLowerCase()) { return -1; }
    if (prop1[property].toLowerCase() > prop2[property].toLowerCase()) { return 1; }
    return 0;
  },
  // Unique array items
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  },
  // Truncate number for prices  amounts. Default is truncated at 2
  truncateNumber(nb: number | string, trunc = 2) {
    let parsedNb = nb;
    if (typeof parsedNb === 'string') {
      parsedNb = parseFloat(parsedNb);
    }
    return parsedNb.toFixed(trunc);
  },
  truncateIntelligentNumber(nb: number | string, trunc = 2) {
    let parsedNb = nb;
    if (typeof parsedNb === 'string') {
      parsedNb = parseFloat(parsedNb);
    }
    return parsedNb.toFixed(parsedNb > 999 ? 0 : trunc);
  },
  // Specific function for graphs.
  // Permits to only show the first and last label (clear all other labels)
  generateLabels(arr) {
    return arr.map((item, index) => {
      if (index === 0 || index === arr.length - 1) {
        return item;
      }
      return '';
    });
  },
};

export default UtilsService;
