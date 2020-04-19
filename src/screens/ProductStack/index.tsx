import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductParamList } from "./HomeParamList";
import Add from "./Add";
import Detail from "./Detail";
import { TouchableOpacity, Text } from "react-native";

interface IindexProps {}

const ProductDrawer = createDrawerNavigator<ProductParamList>();

const index: React.FC<IindexProps> = () => {
  return (
    <ProductDrawer.Navigator>
      <ProductDrawer.Screen name="ProductAdd" component={Add} />
      <ProductDrawer.Screen name="ProductDetail" component={Detail} />
    </ProductDrawer.Navigator>
  );
};

export default index;
