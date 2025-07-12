import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import VersionTag from './src/redux/components/other/VersionTag';
import { initApp } from './src/redux/actions/application.actions';

const store = configureStore();
store.dispatch(initApp())

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <VersionTag />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
