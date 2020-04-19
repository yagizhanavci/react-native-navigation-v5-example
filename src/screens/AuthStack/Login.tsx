import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { IAuthNavProps } from "./AuthParamList";
import { observer, inject } from "mobx-react";
import { AuthStore } from "../../stores/AuthStore";

interface ILoginProps extends IAuthNavProps<"Login"> {
  AuthStore?: AuthStore;
}

const Login: React.FC<ILoginProps> = ({ navigation, AuthStore }) => {
  return (
    <View style={styles.containerStyles}>
      <Text style={styles.textStyles}>Login Screen</Text>
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Log me in" onPress={() => AuthStore?.login()} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    color: "red",
  },
});

export default inject("AuthStore")(observer(Login));
