import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {observer, Provider} from "mobx-react";
import userStore from '../store/UserStore';

export default function TabOneScreen() {
  return (
      <Provider userStore={userStore}>
        {/* Вывести значение store user в компоненте UserProfile */}
        <View style={styles.container}>
          <Text style={styles.title}>Tab One</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
