import {observable} from "mobx";

export interface User {
    name: string;
    username: string;
}



class UserStore {
    @observable user?: User = {name: '', username: ''};
    login() {
        this.user = {name: 'Test', username: 'Username'}
    }
}

const observableUserStore = new UserStore();

export default observableUserStore;
