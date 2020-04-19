import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ProductParamList = {
  ProductAdd: undefined;
  ProductDetail: undefined;
};

export interface IProductNavProps<T extends keyof ProductParamList> {
  navigation: StackNavigationProp<ProductParamList, T>;
  route: RouteProp<ProductParamList, T>;
}
