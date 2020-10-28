import { observer } from "mobx-react";
import React from "react";
import { View, Button } from 'react-native';
import store from "../stores/index";

export const UserProfile = observer(( ) => {
  const user = store.auth.context.user;
  return (
    <View>
      {user?.name}
      <Button onPress={store.auth.login} title={"Login"}></Button> 
    </View>
  );
});
