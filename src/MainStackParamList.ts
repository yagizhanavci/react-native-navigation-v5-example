import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
  AuthStack: undefined;
  HomeStack: undefined;
};

export interface IMainStackNavProps<T extends keyof MainStackParamList> {
  navigation: StackNavigationProp<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
}
