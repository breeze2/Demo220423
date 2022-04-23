import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import PopupView from './src/components/PopupView';
import Header from './src/components/Header';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={'历史心情指数'} returnable />
      <ScrollView>
        <PopupView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
