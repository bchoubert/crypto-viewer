import * as SecureStore from 'expo-secure-store';
import StorageService from '../../services/Storage.service';

describe('StorageService', () => {
  let SecureStoreMock = {} as {
    getItemAsync: (key: string) => string,
    setItemAsync: () => Promise<void>,
  };

  beforeAll(() => {
    SecureStoreMock = {
      getItemAsync: jest.fn((key: string) => `key:${key}`),
      setItemAsync: jest.fn(() => null),
    };

    jest.spyOn(SecureStore, 'getItemAsync');
    jest.spyOn(SecureStore, 'setItemAsync');

    (SecureStore.getItemAsync as unknown as jest.Mock)
      .mockImplementation(SecureStoreMock.getItemAsync);

    (SecureStore.setItemAsync as unknown as jest.Mock)
      .mockImplementation(SecureStoreMock.setItemAsync);
  });

  it('getData', async () => {
    const keyToTest = 'testKey';

    expect(SecureStoreMock.getItemAsync).toHaveBeenCalledTimes(0);

    const res = await StorageService.getData(keyToTest);
    expect(res).toEqual(`key:${keyToTest}`);

    expect(SecureStoreMock.getItemAsync).toHaveBeenCalledTimes(1);
    expect(SecureStoreMock.getItemAsync).toHaveBeenCalledWith(keyToTest);
  });

  it('storeData', async () => {
    const keyToStore = 'testKey';
    const valueToStore = 'testValue';

    expect(SecureStoreMock.setItemAsync).toHaveBeenCalledTimes(0);

    await StorageService.storeData(keyToStore, valueToStore);

    expect(SecureStoreMock.setItemAsync).toHaveBeenCalledTimes(1);
    expect(SecureStoreMock.setItemAsync).toHaveBeenCalledWith(keyToStore, valueToStore);
  });
});
