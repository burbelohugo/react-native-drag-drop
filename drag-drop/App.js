import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Gestures>
<Image
  source={require("./assets/p.jpg")}
  style={{
    width: 200,
    height: 300,
  }}
/>
</Gestures>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
