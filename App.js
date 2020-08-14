import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Button,
  Alert,
  WebView,
  ActivityIndicator,
  Vibration } from 'react-native';


  class App extends React.Component {
    render() {
      return (
        <ScrollView style={{
          backgroundColor: "white"
        }}>

          <View
            style={styles.container}>

              <Text 
                style={styles.text1}>
                  Hello
              </Text>
              <Text 
                style={styles.text2}>
                  Ciao
              </Text>
              <Text
                style={styles.text3}>
                  Salut
              </Text>

            <View>
              <Image 
                source={require('./assets/konexio-logo_1.png')}
                style={{
                  width: 50,
                  height: 50}} />
              <Image
                source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
                style={{
                  width: 50, 
                  height: 0}} />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Button 
                title="Click here"
                onPress={() => Alert.alert('Button clicked')} />
              <Button
                title='Vibre'
                onPress={() => Vibration.vibrate(1 * ONE_SECOND_IN_MS)} />
            </View>

            <View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>

            <View>
              <WebView
                source={{
                  uri: 'https://www.konexio.eu/index.html'
                }} />
              <ActivityIndicator color="#F98B88" />
            </View>
          </View>

        </ScrollView>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 80
    }, text1: {
      fontSize: 30,
    }, text2: {
      textAlign: "center",
    }, text3: {
      fontWeight: "bold",
    },
  });

export default App;