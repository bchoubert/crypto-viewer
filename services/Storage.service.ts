import * as SecureStore from 'expo-secure-store';

// Service applied to store and retrieve data from the device's storage
const StorageService = {
  // Store data at a specific key
  storeData(key: string, value: string): Promise<void> {
    return SecureStore.setItemAsync(key, value);
  },
  // Retrieve the string data store at a specific key
  getData(key: string): Promise<string | null> {
    return SecureStore.getItemAsync(key);
  },
};

export default StorageService;
