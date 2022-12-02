import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';
import BottomBar from './src/router/BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { MainContext } from './src/contexts/main';

export default function App() {
  /* Global variables */
  const screen = Dimensions.get('screen')

  return (
    <MainContext.Provider value={{
      screen
    }}>
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </MainContext.Provider>
  );
}
