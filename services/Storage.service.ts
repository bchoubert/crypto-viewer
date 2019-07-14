import { AsyncStorage } from 'react-native';

const StorageService = {
  storeData(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  },
  getData(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }
};

export default StorageService;
