import Colors, { EColor } from "@/assets/Colors";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon, { EIcon } from "../Utils/Icon";
import { CryptoContext } from "@/contexts/crypto.provider";
import { Picker } from "@react-native-picker/picker";
import CryptoDetails from "@/constants/cryptodetails.constants";
import ECrypto from "@/constants/cryptos.enum";
import { WalletItem } from "@/types/wallet.types";

interface WalletModalProps {
  selectedCrypto: string;
  setSelectedCrypto: (c: string) => void;

  selectedNumber: string;
  setSelectedNumber: (n: string) => void;

  isVisible: boolean;
  toggleVisible: () => void;
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  closeButton: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  inputContainer: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  inputText: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputNative: {
    width: '100%'
  },
  content: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  buttons: {
    flexBasis: 60,
    paddingRight: 20,
    borderTopColor: Colors.gray,
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    marginLeft: 8,
  },
  button: {
    color: Colors.blue,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  }
})

const WalletModal: FC<WalletModalProps> = memo(({
  selectedCrypto,
  setSelectedCrypto,

  selectedNumber,
  setSelectedNumber,

  isVisible,
  toggleVisible,
}) => {
  const translation = useContext(TranslationsContext);
  const { addWalletItem } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);

  const isFormCorrect = useMemo(() => {
    if (!selectedCrypto) {
      return false;
    }

    const parsedValue = parseFloat(selectedNumber);
    return (parsedValue?.toString() === selectedNumber);
  }, [selectedNumber, selectedCrypto]);

  const saveWallet = useCallback(() => {
    if (!isFormCorrect) {
      return;
    }

    const parsedValue = parseFloat(selectedNumber);
    addWalletItem({ id: selectedCrypto, quantity: parsedValue });

    // Clear form
    setSelectedCrypto(cryptos[0]?.id);
    setSelectedNumber('');

    toggleVisible();
  }, [isFormCorrect, toggleVisible, cryptos, selectedCrypto, selectedNumber]);

  useEffect(() => {
    if (cryptos && cryptos.length > 0) {
      setSelectedCrypto(cryptos[0].id);
    }
  }, [cryptos]);

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible} style={styles.modal}>
      <View style={styles.content}>
        <Text style={styles.title}>{translation.wallet.add_wallet}</Text>
        <Pressable onPress={toggleVisible} style={styles.closeButton}>
          <Icon name={EIcon.close} color={EColor.gray} />
        </Pressable>
        
        <View style={styles.inputContainer}>
          <Text>Crypto</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={selectedCrypto}
              onValueChange={setSelectedCrypto}
            >
              {cryptos.map(c => (
                <Picker.Item
                  key={c.id}
                  label={c.name}
                  value={c.id}
                  color={CryptoDetails[c.id.toLowerCase() as ECrypto]?.color || Colors.gray}
                />
              ))}
            </Picker>
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <Text>Quantity</Text>
          <View style={{ ...styles.input, ...styles.inputText }}>
            <TextInput
              style={styles.inputNative}
              keyboardType="numbers-and-punctuation"
              value={selectedNumber}
              onChangeText={setSelectedNumber}
            />
          </View>
        </View>

      </View>
      <View style={styles.buttons}>
        <Pressable onPress={toggleVisible} style={styles.buttonContainer}>
          <Text style={styles.button}>{translation.common.cancel}</Text>
        </Pressable>
        <Pressable onPress={saveWallet} style={styles.buttonContainer} disabled={!isFormCorrect}>
          <Text style={{ ...styles.button, fontWeight: 'bold', color: isFormCorrect ? Colors.blue : Colors.gray }}>
            {translation.common.save}
          </Text>
        </Pressable>
      </View>
    </Modal>
  )
});

export default WalletModal;
