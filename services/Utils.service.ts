
const UtilsService = {
  sortFnOnStringProperty(prop1, prop2, property) {
    if(prop1[property].toLowerCase() < prop2[property].toLowerCase()) { return -1 }
    if(prop1[property].toLowerCase() > prop2[property].toLowerCase()) { return 1 }
    return 0;
  },
  truncateNumber(nb: number | string, trunc = 2) {
    if(typeof nb === 'string') {
      nb = parseFloat(nb);
    }
    return nb.toFixed(trunc);
  }
}

export default UtilsService;
