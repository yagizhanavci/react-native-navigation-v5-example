import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "./AuthParamList";
import Login from "./Login";
import Register from "./Register";

interface IindexProps {}

const AuthStack = createStackNavigator<AuthParamList>();

const index: React.FC<IindexProps> = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default index;
