import { observable, action, decorate } from "mobx";
import { AsyncStorage } from "react-native";

export type User = {
  username: string;
} | null;

export class AuthStore {
  user: User = null;

  login = async () => {
    this.user = {
      username: "bob",
    };
    await AsyncStorage.setItem("user", JSON.stringify(this.user));
  };

  logout = async () => {
    this.user = null;
    await AsyncStorage.removeItem("user");
  };
}

decorate(AuthStore, {
  user: observable,
  login: action,
  logout: action,
});
