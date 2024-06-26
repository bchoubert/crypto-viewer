export enum EColor {
  blue = 'blue',
  veryLightGray = 'veryLightGray',
  lightGray = 'lightGray',
  midGray = 'midGray',
  gray = 'gray',
  darkGray = 'darkGray',

  green = 'green',
  red = 'red',

  black = 'black',
  white = 'white',
}

/* Colors used all over the app */
const Colors: Record<EColor, string> = {
  [EColor.blue]: '#005BE3',
  [EColor.veryLightGray]: '#F8F8F8',
  [EColor.lightGray]: '#F0F0F0',
  [EColor.midGray]: '#CDCDCD',
  [EColor.gray]: '#666666',
  [EColor.darkGray]: '#333333',

  [EColor.green]: '#00B344',
  [EColor.red]: '#FF0D00',

  [EColor.black]: '#000000',
  [EColor.white]: '#FFFFFF',
};

export default Colors;
