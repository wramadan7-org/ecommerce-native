import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store from './src/redux/store';

// import Main
import Main from './src/screens/Main';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <SafeAreaView style={styles.safearea}>
          <Main />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
});
