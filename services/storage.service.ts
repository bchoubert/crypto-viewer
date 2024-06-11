import * as SecureStore from 'expo-secure-store';

// Store data at a specific key
export const storeData = (key: string, value: string): Promise<void> => SecureStore.setItemAsync(key, value);

// Retrieve the string data store at a specific key
export const getData = (key: string): Promise<string | null> => SecureStore.getItemAsync(key);

