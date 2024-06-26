import { FC, memo, useCallback, useContext, useEffect, useMemo } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Icon, { EIcon } from "../Utils/Icon";

import Colors from "@/assets/Colors";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { CryptoContext } from "@/contexts/crypto.provider";
import CryptoDetails from "@/constants/cryptodetails.constants";
import ECrypto from "@/constants/cryptos.enum";
import { ThemeContext } from "@/contexts/theme.provider";

interface WalletModalProps {
  selectedCrypto: string;
  setSelectedCrypto: (c: string) => void;

  selectedNumber: string;
  setSelectedNumber: (n: string) => void;

  isVisible: boolean;
  toggleVisible: () => void;
}

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
  const theme = useContext(ThemeContext);
  
  const styles = useMemo(() => StyleSheet.create({
    modal: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    modalContainer: {
      backgroundColor: theme[100],
      height: '100%',
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
      borderColor: theme[300],
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
    inputTitle: {
      color: theme[900]
    },
    inputNative: {
      color: theme[900],
      width: '100%'
    },
    picker: {
      color: theme[900]
    },
    pickerItem: {
      backgroundColor: theme[100],
    },
    content: {
      flex: 1,
      width: '100%',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
      color: theme[900]
    },
    buttons: {
      flexBasis: 60,
      paddingRight: 20,
      borderTopColor: theme[300],
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
      backgroundColor: theme[300],
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
  }), [theme]);


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
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{translation.wallet.add_wallet}</Text>
          <Pressable onPress={toggleVisible} style={styles.closeButton}>
            <Icon name={EIcon.close} color={theme[900]} />
          </Pressable>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Crypto</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={selectedCrypto}
                onValueChange={setSelectedCrypto}
                style={styles.picker}
                dropdownIconColor={theme[900]}
              >
                {cryptos.map(c => (
                  <Picker.Item
                    key={c.id}
                    label={c.name}
                    value={c.id}
                    style={styles.pickerItem}
                    color={CryptoDetails[c.id.toLowerCase() as ECrypto]?.color || Colors.gray}
                  />
                ))}
              </Picker>
            </View>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Quantity</Text>
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
      </View>
    </Modal>
  )
});

export default WalletModal;
