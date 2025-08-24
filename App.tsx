import { StyleSheet, View } from 'react-native';
import { FC, useMemo } from 'react';
import { Dimensions } from 'react-native';
import Providers from './contexts/Providers';
import Content from './Content';

const App: FC = () => {
  const screenHeight = Dimensions.get('window').height;

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('screen').height,
    },
  }), [screenHeight]);

  return (
    <View style={styles.container}>
      <Providers>
        <Content />
      </Providers>
    </View>
  );
}

export default App;
