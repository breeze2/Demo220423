import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import PopupView from './src/components/PopupView';
import Header from './src/components/Header';
import WeekMoods from './src/components/WeekMoods';

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
        <PopupView>
          <WeekMoods />
        </PopupView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
