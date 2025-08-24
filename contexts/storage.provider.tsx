import { createContext, FC, memo, ReactNode, useMemo } from "react";
import { MMKVInstance, MMKVLoader } from 'react-native-mmkv-storage';

interface StorageContextInterface {
  storage: MMKVInstance;
}

export const StorageContext = createContext<StorageContextInterface>({ storage: {} as MMKVInstance });

interface StorageProviderProps {
  children: ReactNode;
}

const StorageProvider: FC<StorageProviderProps> = memo(({
  children,
}) => {
  const storage = useMemo(() => new MMKVLoader().withEncryption().initialize(), []);

  const contextValues: StorageContextInterface = useMemo(() => ({ storage }), [storage]);

  return (
    <StorageContext.Provider value={contextValues}>
      {children}
    </StorageContext.Provider>
  );
});

export default StorageProvider;
