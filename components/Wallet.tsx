import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Wallet extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Wallet</Text>
      </View>
    );
  }
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center'
  }
});
