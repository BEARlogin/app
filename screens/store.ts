import { observable } from "mobx";

class store {
    @observable count = 0;

    plus() { 
        return this.count++;
    };

    minus() {
        return this.count--;
    }
}

export default new store();