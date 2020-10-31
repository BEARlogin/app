import * as React from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { UserProfile } from "../components/UserProfile";

import { observer } from "mobx-react";
import NavigationStore from "../navigation/NavigationStore";
import store from "./store";

function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <UserProfile />
      <Button title={"Back Nav"} onPress={() => NavigationStore.backNav()} ></Button>
      <Text>{store.count}</Text>
      <Button title={"+"} onPress={() => store.plus()} ></Button>
      <Button title={"-"} onPress={() => store.minus()} ></Button>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

export default observer(TabOneScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
