import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer, inject } from "mobx-react";
import { AuthStore } from "./stores/AuthStore";
import { MainStackParamList } from "./MainStackParamList";
import AuthStack from "./screens/AuthStack";
import HomeStack from "./screens/HomeStack";
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

interface IRoutesProps {
  AuthStore?: AuthStore;
}

type MainStackScreens = "AuthStack" | "HomeStack";

const Stack = createStackNavigator<MainStackParamList>();

const Routes: React.FC<IRoutesProps> = ({ AuthStore }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [initialRouteName, setInitialRouteName] = React.useState<
    MainStackScreens
  >("AuthStack");

  React.useEffect(() => {
    // Check if there is any user
    AsyncStorage.getItem("user")
      .then((res) => {
        if (res) {
          AuthStore!.user = JSON.parse(res!);
          setInitialRouteName("HomeStack");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.containerStyles}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default inject("AuthStore")(observer(Routes));
