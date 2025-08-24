import { FC, memo, useCallback, useContext, useMemo, useRef, useState } from "react";
import { Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import BigButton from "../business/wallet/BigButton";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { ThemeContext } from "../../contexts/theme.provider";
import { Coins } from "lucide-react-native";
import { useMMKVStorage } from 'react-native-mmkv-storage';
import WalletModal, { WalletModalRefInterface } from "../business/wallet/WalletModal";
import { StorageContext } from "../../contexts/storage.provider";
import { WalletItemType, WalletType } from "../../types/wallet";
import { MarketContext } from "../../contexts/market.provider";
import WalletItem from "../business/wallet/WalletItem";
import FormatPrice from "../utils/FormatPrice";
import TranslationText from "../utils/TranslationText";

const Wallet: FC = memo(() => {
  const { market } = useContext(MarketContext);
  const { storage } = useContext(StorageContext);
  const { theme } = useContext(ThemeContext);
  
  const [wallet, setWallet] = useMMKVStorage<WalletType>('wallet', storage, {});

  const statusBarHeight = getStatusBarHeight();
  const screenHeight = Dimensions.get('window').height;

  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const modalRef = useRef<WalletModalRefInterface>(null);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: screenHeight - (statusBarHeight + 50 + 60),
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    noContent: {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 16,
    },
    icon: {
      color: theme.colors.text,
      opacity: 1,
    },
    text: {
      color: theme.colors.text,
      fontSize: 20,
    },
    total: {
      margin: 5,
      padding: 16,
      height: 45,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.elevated,
      borderRadius: 5,
    },
    totalText: {
      color: theme.colors.text,
    },
    list: {
      maxHeight: Dimensions.get('window').height - 300,
    }
  }), [theme]);

  const addCrypto = useCallback((crypto: string, amount: string) => {
    const walletCopy = {...wallet};
    walletCopy[crypto] = +amount;
    setWallet(walletCopy);
  }, [wallet, setWallet]);

  const walletItems: WalletItemType[] = useMemo(() => {
    const walletKeys = Object.keys(wallet);
    return market.filter(m => walletKeys.includes(m.id))
      .map(m => ({
        ...m,
        amount: wallet[m.id],
        totalPrice: wallet[m.id] * m.current_price,
      }));
  }, [wallet, market]);

  const isWalletEmpty = useMemo(() => {
    const walletKeys = Object.keys(wallet);
    return walletKeys.length === 0;
  }, [wallet]);

  const grandTotal = useMemo(() => {
    return walletItems.reduce(
      (prev: number, current: WalletItemType) => prev + current.totalPrice,
      0,
    );
  }, [walletItems]);

  const editItem = useCallback((item: WalletItemType) => {
    modalRef.current?.openCryptoFromParent(item.id);
    setModalVisible(true);
  }, [modalRef]);

  const deleteItem = useCallback((item: WalletItemType) => {
    const walletCopy = {...wallet};
    delete walletCopy[item.id];
    setWallet(walletCopy);
  }, [wallet]);

  const renderWalletItem = useCallback(({ item }: { item: WalletItemType }) => (
    <WalletItem
      walletItem={item}
      editWalletItem={() => editItem(item)}
      deleteWalletItem={() => deleteItem(item)}
    />
  ), [deleteItem]);

  return (
    <View style={styles.container}>
      {isWalletEmpty ? (
        <View style={styles.noContent}>
          <Coins style={styles.icon} height={100} width={100} />
          <TranslationText id="wallet.empty" style={styles.text} />
        </View>
      ) : (
        <>
          <FlatList
            data={walletItems}
            renderItem={renderWalletItem}
            keyExtractor={item => item.id}
            style={styles.list}
          />

          <View style={styles.total}>
            <TranslationText id="wallet.total" style={styles.totalText} />
            <FormatPrice style={styles.totalText} amount={grandTotal} />
          </View>
        </>
      )}

      <WalletModal
        ref={modalRef}
        wallet={wallet}
        addCrypto={addCrypto}
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}
      />
      
      <BigButton onButtonClick={() => setModalVisible(true)} />
    </View>
  );
});

Wallet.displayName = '<Wallet />';

export default Wallet;
