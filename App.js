import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './assets/components/Home';
import { GluestackUIProvider, Heading } from "@gluestack-ui/themed"
import { PaperProvider } from 'react-native-paper';

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);


  return (
    <PaperProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Home />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
