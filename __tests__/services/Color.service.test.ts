import ColorService from '../../services/Color.service';

describe('ColorService', () => {
  it('hexToRgba', () => {
    expect(ColorService.hexToRgba('#000000', 4)).toEqual('rgba(0, 0, 0, -3)');
    expect(ColorService.hexToRgba('#000', 4)).toEqual('rgba(0, 0, 0, -3)');

    expect(ColorService.hexToRgba('#FFFFFF', 4)).toEqual('rgba(255, 255, 255, -3)');
    expect(ColorService.hexToRgba('#FFF', 4)).toEqual('rgba(255, 255, 255, -3)');

    const fnBadHex1 = () => ColorService.hexToRgba('#0000', 4);
    const fnBadHex2 = () => ColorService.hexToRgba('#', 4);
    const fnBadHex3 = () => ColorService.hexToRgba('', 4);
    expect(fnBadHex1).toThrow();
    expect(fnBadHex2).toThrow();
    expect(fnBadHex3).toThrow();
  });

  it('getColorFromCrypto', () => {
    expect(ColorService.getColorFromCrypto('non_existing_crypto')).toEqual('#000000');
    expect(ColorService.getColorFromCrypto('btc')).toEqual('#F7931B');
  });

  it('getColorFromCrypto', () => {
    expect(ColorService.lightenDarkenColor('#F7931B', 20)).toEqual('#ffa72f');
    expect(ColorService.lightenDarkenColor('#000000', 20)).toEqual('#141414');
    expect(ColorService.lightenDarkenColor('#FFFFFF', 20)).toEqual('#ffffff');

    expect(ColorService.lightenDarkenColor('#F7931B', -20)).toEqual('#e37f07');
    expect(ColorService.lightenDarkenColor('#000000', -20)).toEqual('#0');
    expect(ColorService.lightenDarkenColor('#FFFFFF', -20)).toEqual('#ebebeb');
  });
});
