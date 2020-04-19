import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type HomeParamList = {
  Home: undefined;
  Search: undefined;
  Product: undefined;
};

export interface IHomeNavProps<T extends keyof HomeParamList> {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
}
