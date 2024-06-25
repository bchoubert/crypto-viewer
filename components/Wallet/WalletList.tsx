import Colors, { EColor } from "@/assets/Colors";
import Icon, { EIcon } from "@/components/Utils/Icon";
import WalletListItem from "@/components/Wallet/WalletListItem";
import WalletModal from "@/components/Wallet/WalletModal";
import { SettingsContext } from "@/contexts/settings.provider";
import { WalletItem } from "@/types/wallet.types";
import { FC, memo, useCallback, useContext, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  button: {
    backgroundColor: Colors.blue,
    position: 'absolute',
    right: 20,
    bottom: 20,
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  swipeActions: {
    position: 'absolute',
    left: '100%',
    top: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 60,
  },
  emptyMessage: {
    textAlign: 'center',
    padding: 10,
  }
})

const WalletList: FC = memo(() => {
  const { wallet } = useContext(SettingsContext);

  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  // FORM
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  
  const setSelectedCryptoProxy = useCallback((c: string) => {
    const item = wallet.find((i: WalletItem) => i.id === c);

    if (item) {
      setSelectedNumber(item.quantity?.toString());
    } else {
      setSelectedNumber('');
    }

    setSelectedCrypto(c);
  }, [wallet]);

  const setSelectedCryptoProxyAndOpenModal = useCallback((c: string) => {
    setSelectedCryptoProxy(c);
    setModalVisible(true);
  }, [setModalVisible, setSelectedCryptoProxy]);

  const handleSelectedNumber = useCallback((t: string) => {
    const cleanedValue = t.replace(/[^0-9.]/g, '');
    setSelectedNumber(cleanedValue);
  }, []);

  // MODAL

  const toggleModalVisible = useCallback(() => setModalVisible(t => !t), [setModalVisible]);

  const renderItem = useCallback(
    (props: { item: WalletItem }) => {
      return (
        <View>
          <WalletListItem
            key={props.item.id}
            item={props.item} 
            setSelectedCrypto={setSelectedCryptoProxyAndOpenModal}
          />
        </View>
      );
    },
    [setSelectedCryptoProxyAndOpenModal],
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={wallet}
        renderItem={renderItem}
        renderHiddenItem={() => (<View />)}
        rightOpenValue={-140}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>No items yet</Text>
        )}
      ></SwipeListView>
      <Pressable style={styles.button} onPress={toggleModalVisible}>
        <Icon name={EIcon.plus} color={EColor.white} />
      </Pressable>
      <WalletModal
        selectedCrypto={selectedCrypto}
        setSelectedCrypto={setSelectedCryptoProxy}

        selectedNumber={selectedNumber}
        setSelectedNumber={handleSelectedNumber}

        toggleVisible={toggleModalVisible}
        isVisible={isModalVisible}
      />
    </View>
  );
});

export default WalletList;
