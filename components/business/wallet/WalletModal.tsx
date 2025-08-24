import { FC, forwardRef, memo, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { Button, Dimensions, Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { ThemeContext } from "../../../contexts/theme.provider";
import { Wallet, X } from "lucide-react-native";
import CryptoDropdown from "./CryptoDropdown";
import { WalletType } from "../../../types/wallet";
import { TranslationContext } from "../../../contexts/translation.provider";
import { getTranslationStringViaId } from "../../../types/translation";
import TranslationText from "../../utils/TranslationText";

export interface WalletModalRefInterface {
  openCryptoFromParent: (id: string) => void;
}

interface WalletModalProps {
  wallet: WalletType;
  isVisible: boolean;
  closeModal: () => void;
  addCrypto: (crypto: string, amount: string) => void;
}

const WalletModal = forwardRef<WalletModalRefInterface, WalletModalProps>(({
  wallet,
  isVisible,
  closeModal,
  addCrypto,
}, ref) => {
  const { theme } = useContext(ThemeContext);
  const { translation } = useContext(TranslationContext);

  const [crypto, setCrypto] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  
  const [amountError, setAmountError] = useState<string>('');
  const [cryptoError, setCryptoError] = useState<string>(
    getTranslationStringViaId('wallet.modal.inputs.crypto.emptyError', translation)
  );

  const styles = useMemo(() => StyleSheet.create({
    parent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${theme.colors.background}AA`,
      height: Dimensions.get('screen').height,
    },
    modal: {
      backgroundColor: theme.colors.elevated,
      width: Dimensions.get('window').width * 0.75,
      borderRadius: 16,
      height: 400,
      alignSelf: 'center',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.text, 
    },
    modalTitle: {
      color: theme.colors.text,
      fontSize: 16,
      textTransform: 'uppercase',
    },
    icon: {
      color: theme.colors.text,
      opacity: 1,
    },
    text: {
      color: theme.colors.text,
      fontSize: 20,
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      paddingLeft: 8,
      marginBottom: 8,
      color: theme.colors.text,
    },
    contentContainer: {
      flex: 1,
      marginVertical: 16,
      display: 'flex',
      flexDirection: 'column',
    },
    dropdown: {
      height: 70,
    },
    button: {
      backgroundColor: theme.colors.action,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    },
    buttonError: {
      opacity: 0.5,
    },
    buttonText: {
      fontSize: 15,
      color: theme.colors.actionText,
      opacity: 1,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.action,
      borderRadius: 6,
      backgroundColor: theme.colors.elevated,
      height: 50,
      marginHorizontal: 8,
      color: theme.colors.text,
    },
    error: {
      margin: 8,
      color: '#A06B6B',
    }
  }), [theme]);

  useImperativeHandle(ref, () => ({
    openCryptoFromParent(id: string) {
      openCrypto(id);
    }
  }))

  const openCrypto = useCallback((id: string) => {
    const value = wallet[id];

    if (!value) {
      return;
    }

    setCrypto(id);
    setAmount(`${value}`);
  }, [wallet, setCrypto, setAmount]);

  const computeAmountError = useCallback(() => {
    const isCorrectAmount = /^\d+(\.\d+)?$/.test(amount);
    setAmountError(isCorrectAmount ? '' : 
      getTranslationStringViaId('wallet.modal.inputs.amount.emptyError', translation));
    return isCorrectAmount;
  }, [amount, setAmountError]);
  useEffect(() => { computeAmountError(); }, [amount]);

  const computeCryptoError = useCallback(() => {
    const isCorrect = !!crypto;
    setCryptoError(isCorrect ? '' : 
      getTranslationStringViaId('wallet.modal.inputs.crypto.emptyError', translation));
    return isCorrect;
  }, [setCryptoError, crypto]);
  useEffect(() => {
    if (crypto && wallet[crypto]) {
      setAmount(`${wallet[crypto]}`);
    }
    computeCryptoError();
  }, [setCryptoError, crypto]);

  const submitForm = useCallback(() => {
    const isCorrect = computeCryptoError() && computeAmountError();

    if (!isCorrect) {
      return;
    }

    addCrypto(crypto, amount);

    setCrypto('');
    setAmount('');
    closeModal();
  }, [crypto, amount]);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <Pressable style={styles.parent} onPress={closeModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.titleContainer}>
              <TranslationText id="wallet.modal.title" style={styles.modalTitle} />
              <Pressable onPress={closeModal}>
                <X style={styles.icon} width={20} height={20} />
              </Pressable>
            </View>
            <View style={styles.contentContainer}>
              <TranslationText id="wallet.modal.inputs.crypto.title" style={styles.title} />
              <View style={styles.dropdown}>
                <CryptoDropdown
                  selectedId={crypto}
                  selectNewId={setCrypto}
                />
              </View>

              <TranslationText id="wallet.modal.inputs.amount.title" style={styles.title} />
              <TextInput
                style={styles.input}
                onChangeText={setAmount}
                value={amount}
                keyboardType="numeric"
              />

              <Text style={styles.error}>{cryptoError}</Text>
              <Text style={styles.error}>{amountError}</Text>
            </View>
            <Pressable
              style={[styles.button, (cryptoError || amountError) && styles.buttonError]}
              onPress={submitForm}
            >
              <Wallet style={styles.buttonText} size={20} />
              <TranslationText id="wallet.modal.button" style={styles.buttonText} />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
});

export default WalletModal;
