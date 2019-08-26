import { AsyncStorage } from 'react-native';

// Service applied to store and retrieve data from the device's storage
const StorageService = {
  // Store data at a specific key
  storeData(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  },
  // Retrieve the string data store at a specific key
  getData(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }
};

export default StorageService;
