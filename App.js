import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';
import BottomBar from './src/router/BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { MainContext, sharedState } from './src/contexts/main';

export default function App() {
  return (
    <MainContext.Provider value={sharedState}>
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </MainContext.Provider>
  );
}
