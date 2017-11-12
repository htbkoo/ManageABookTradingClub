import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions =
    'Press Ctrl+R to reload,\n' +
    'Shift+F10 or shake for dev menu';

export default class AppCommon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

          <View style={windowsStyles.container}>
              <Text style={windowsStyles.welcome}>
                  Welcome to React Native!
              </Text>
              <Text style={windowsStyles.instructions}>
                  To get started, edit App.windows.js
              </Text>
              <Text style={windowsStyles.instructions}>
                  {instructions}
              </Text>
          </View>

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

const windowsStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

