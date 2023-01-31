import React, {
  FC, memo, useContext, useMemo,
} from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Modal, TextInput, TouchableHighlight, Text, View, StyleSheet, Dimensions,
} from 'react-native';

import Crypto from '../../models/Crypto';
import CryptoIcon from '../Utils/CryptoIcon';
import { TranslationContext } from '../../contexts/TranslationProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

interface WalletModalProps {
  isOpen: boolean;
  closeModal: () => any;
  selectedAmount: string;
  selectedCryptoKey: string;
  isFormValid: boolean;
  saveWallet: () => any;
  onSelectedCryptoKeyChange: (newCryptoKey: string) => any;
  onSelectedAmountChange: (newAmount: string) => any;
  cryptos: Crypto[];
}

const WalletModal: FC<WalletModalProps> = ({
  isOpen,
  closeModal,
  selectedAmount,
  selectedCryptoKey,
  isFormValid,
  saveWallet,
  onSelectedCryptoKeyChange,
  onSelectedAmountChange,
  cryptos,
}) => {
  const t = useContext(TranslationContext);

  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    modal_container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, .7)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modal: {
      width: Dimensions.get('window').width,
      height: 220,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: theme.backgroundTile,
    },
    topBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.backgroundTile,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      paddingLeft: 15,
      paddingRight: 15,
    },
    modal_title: {
      fontSize: 18,
      color: theme.textColor,
    },
    modal_action: {
      color: theme.actionText,
      fontSize: 18,
      minWidth: 50,
      textAlign: 'left',
    },
    modal_main_action: {
      fontWeight: 'bold',
      textAlign: 'right',
    },
    modal_label: {
      fontSize: 10,
      color: theme.textColor,
    },
    modal_content: {
      padding: 10,
    },
    disabled_modal_action: {
      color: theme.textColor,
      fontWeight: 'normal',
    },
    modal_crypto: {
      flex: 1,
      color: theme.textColor,
    },
    amount_input: {
      padding: 5,
      borderBottomColor: theme.textColor,
      borderBottomWidth: 1,
      color: theme.textColor,
    },
    modal_crypto_container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      flexBasis: 50,
    },
  }), [theme]);

  const cryptoOptions = useMemo(
    () => cryptos.map(
      (asset) => <Picker.Item key={asset.id} label={asset.name} value={asset.id} />,
    ),
    [cryptos],
  );

  return (
    <Modal
      animationType="slide"
      visible={isOpen}
      transparent
    >
      <View style={styles.modal_container}>
        <View style={styles.modal}>
          <View style={styles.topBar}>
            {/* Cancel button */}
            <TouchableHighlight onPress={closeModal}>
              <Text style={styles.modal_action}>
                {t.common.cancel}
              </Text>
            </TouchableHighlight>
            <Text style={styles.modal_title}>
              {t.wallet.add_wallet}
            </Text>
            {/* Save buttom, active only if isValid() returnes true */}
            <TouchableHighlight onPress={saveWallet}>
              <Text
                style={{
                  ...styles.modal_action,
                  ...styles.modal_main_action,
                  ...(isFormValid ? [] : styles.disabled_modal_action),
                }}
              >
                {t.common.save}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.modal_content}>
            <Text style={styles.modal_label}>
              {t.wallet.crypto}
            </Text>
            <View style={styles.modal_crypto_container}>
              {!!selectedCryptoKey
                && <CryptoIcon code={selectedCryptoKey.toLowerCase()} />}
              {/* Picker with a default item */}
              <Picker
                selectedValue={selectedCryptoKey}
                style={styles.modal_crypto}
                onValueChange={onSelectedCryptoKeyChange}
                testID="crypto-selector"
              >
                <Picker.Item label={t.common.select_option} value={null} />
                {cryptoOptions}
              </Picker>
            </View>
            <Text style={styles.modal_label}>
              {t.wallet.amount}
            </Text>
            <TextInput
              accessibilityLabel="amount-input"
              placeholder="1.02"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              style={styles.amount_input}
              value={selectedAmount ? (`${selectedAmount}`) : null}
              onChangeText={onSelectedAmountChange}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(WalletModal);
