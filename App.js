import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import TopBar from './src/router/TopBar';
import BottomBar from './src/router/BottomBar';

export default function App() {
  return (
    <>
      <TopBar />
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
