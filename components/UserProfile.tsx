import userStore from '../store/UserStore';
import React from "react";
import {observer} from "mobx-react";

export const UserProfile = observer(() =>{
    return(
        <div>
            {userStore.user?.username}
        </div>
    );
})
