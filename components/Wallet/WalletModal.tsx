import React, { FC, memo, useMemo } from 'react';
import { Picker } from '@react-native-community/picker';
import { Modal, TextInput, TouchableHighlight, Text, View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../assets/Colors';

import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import CryptoIcon from '../Utils/CryptoIcon';

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modal: {
    width: Dimensions.get('window').width,
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF'
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  modal_title: {
    fontSize: 18
  },
  modal_action: {
    color: Colors.blue,
    fontSize: 18,
    minWidth: 50,
    textAlign: 'left'
  },
  modal_main_action: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  modal_label: {
    fontSize: 10,
    color: Colors.gray
  },
  modal_content: {
    padding: 10
  },
  disabled_modal_action: {
    color: Colors.gray,
    fontWeight: 'normal',
  },
  modal_crypto: {
    flex: 1
  },
  amount_input: {
    padding: 5,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1
  },
  modal_crypto_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    flexBasis: 50
  },

});

interface WalletModalProps {
  isOpen: boolean;
  closeModal: () => any;
  selectedAmount: number;
  selectedCryptoKey: string;
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
  saveWallet,
  onSelectedCryptoKeyChange,
  onSelectedAmountChange,
  cryptos,
}) => {

  // Validate function for the modal form
  const isValid = useMemo(
    () => !!selectedAmount && !!selectedCryptoKey,
    [selectedAmount, selectedCryptoKey],
  );

  const cryptoOptions = useMemo(
    () => cryptos.map(asset => <Picker.Item key={asset.id} label={asset.name} value={asset.id} />),
    [cryptos],
  );

  return (
    <Modal
      animationType="slide"
      visible={isOpen}
      transparent={true}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal}>
          <View style={styles.topBar}>
            {/* Cancel button */}
            <TouchableHighlight onPress={closeModal}>
              <Text style={styles.modal_action}>Cancel</Text>
            </TouchableHighlight>
            <Text style={styles.modal_title}>Add to your Wallet</Text>
            {/* Save buttom, active only if isValid() returnes true */}
            <TouchableHighlight onPress={saveWallet}>
              <Text style={{ ...styles.modal_action, ...styles.modal_main_action, ...(isValid && [] || styles.disabled_modal_action) }}>Save</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.modal_content}>
            <Text style={styles.modal_label}>Crypto</Text>
            <View style={styles.modal_crypto_container}>
              {!!selectedCryptoKey &&
                <CryptoIcon code={selectedCryptoKey.toLowerCase()} />
              }
              {/* Picker with a default item */}
              <Picker
                selectedValue={selectedCryptoKey}
                style={styles.modal_crypto}
                onValueChange={onSelectedCryptoKeyChange}>
                <Picker.Item label='Please select an option...' value={null} />
                {cryptoOptions}
              </Picker>
            </View>
            <Text style={styles.modal_label}>Amount</Text>
            <TextInput
              placeholder="1.02"
              underlineColorAndroid='transparent'
              keyboardType={'numeric'}
              style={styles.amount_input}
              value={!!selectedAmount ? (selectedAmount + '') : null}
              onChangeText={onSelectedAmountChange} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(WalletModal);
