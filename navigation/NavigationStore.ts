import { action, computed, decorate, observable } from "mobx";
import { Alert } from "react-native";

class NavigationStore {
    @observable isSigIn = false;
    @observable login = "";
    @observable password = "";

    @action setLogin(text: string) {
        this.login = text;
    };

    @action setPassword(text: string){
        this.password = text;
    }

    goNav(){
        if(this.login === this.allUsers[0].name && this.password === this.allUsers[0].password){
            this.isSigIn = true;
        } else{
            Alert.alert("User undefiend","Please create account")
        }
    };

    backNav() {
        this.isSigIn = false;
    };

    allUsers = [ { name: "User1", password: "12345" }, ]

};

export default new NavigationStore();