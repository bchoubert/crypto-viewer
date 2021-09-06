import UtilsService from '../../../services/Utils.service';

describe('UtilsService', () => {
  it('sortFnOnStringProeprty', () => {
    const objs = [{ l: 'a' }, { l: 'b' }, { l: 'A' }, { l: 'b' }];
    expect(objs.sort((a, b) => UtilsService.sortFnOnStringProperty(a, b, 'l')))
      .toEqual([{ l: 'a' }, { l: 'A' }, { l: 'b' }, { l: 'b' }]);
  });

  it('onlyUnique', () => {
    const letters = ['A', 'a', 'b', 'b', 'C', 'd'];
    expect(letters.filter(UtilsService.onlyUnique)).toEqual(['A', 'a', 'b', 'C', 'd']);
  });

  it('truncateNumber', () => {
    expect(UtilsService.truncateNumber('9999.99999')).toEqual('10000.00');
    expect(UtilsService.truncateNumber('9999.99999', 0)).toEqual('10000');
    expect(UtilsService.truncateNumber('2.5')).toEqual('2.50');
    expect(UtilsService.truncateNumber('2.5', 1)).toEqual('2.5');
    expect(UtilsService.truncateNumber('2.5', 0)).toEqual('3');
    expect(UtilsService.truncateNumber(0)).toEqual('0.00');
    expect(UtilsService.truncateNumber(59999.255654, 0)).toEqual('59999');
  });

  it('truncateIntelligentNumber', () => {
    expect(UtilsService.truncateIntelligentNumber('9999.99999')).toEqual('10000');
    expect(UtilsService.truncateIntelligentNumber('9999.99999', 0)).toEqual('10000');
    expect(UtilsService.truncateIntelligentNumber('2.5')).toEqual('2.50');
    expect(UtilsService.truncateIntelligentNumber('2.5', 1)).toEqual('2.5');
    expect(UtilsService.truncateIntelligentNumber('2.5', 0)).toEqual('3');
    expect(UtilsService.truncateIntelligentNumber(0)).toEqual('0.00');
    expect(UtilsService.truncateIntelligentNumber(59999.255654, 0)).toEqual('59999');
  });

  it('generateLabels', () => {
    expect(UtilsService.generateLabels(['a', 'b', 'c', 'd'])).toEqual(['a', '', '', 'd']);
  });
});
