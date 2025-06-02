import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  console.log(`rendered`);

  const onPressOnly = () => {
    console.log('onPressOnly called');
  };

  const onPressWrapped = () => {
    console.log('onPressWrapped called');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.boxStatic,
            backgroundColor: 'cyan',
          }}>
          <TouchableOpacity onPress={onPressWrapped} activeOpacity={1}>
            <Text style={styles.boxTitle}>
              {'touchable-opacity wrapped WITH view'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={onPressOnly}
          activeOpacity={1}
          style={{
            ...styles.boxStatic,
            backgroundColor: 'yellow',
          }}>
          <Text style={styles.boxTitle}>{'ONLY touchable-opacity'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#333333',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    borderColor: 'yellow',
    borderWidth: 2,
  },
  boxStatic: {
    height: 80,
    justifyContent: 'center',
    marginVertical: 16,
  },
  boxTitle: {textAlign: 'center'},
});

export default App;
