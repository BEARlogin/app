import { observer } from "mobx-react";
import React from "react";

import store from "../stores/index";

export const UserProfile = observer(() => {
  const user = store.auth.context.user;
  return (
    <div>
      {user?.name}
      <button onClick={store.auth.login}>Login</button>
    </div>
  );
});
