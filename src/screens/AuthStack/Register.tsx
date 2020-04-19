import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { IAuthNavProps } from "./AuthParamList";

interface IRegisterProps extends IAuthNavProps<"Login"> {}

interface IRegisterState {}

class Register extends React.Component<IRegisterProps, IRegisterState> {
  render() {
    return (
      <View style={styles.containerStyles}>
        <Text>{this.props.route.name} Screen</Text>
        <Button
          title="Go to login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
