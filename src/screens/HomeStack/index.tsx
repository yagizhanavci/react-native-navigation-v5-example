import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeParamList } from "./HomeParamList";
import Home from "./Home";
import Search from "./Search";
import Product from "../ProductStack";

interface IindexProps {}

const HomeTabs = createBottomTabNavigator<HomeParamList>();

const index: React.FC<IindexProps> = () => {
  return (
    <HomeTabs.Navigator initialRouteName="Home">
      <HomeTabs.Screen name="Home" component={Home} />
      <HomeTabs.Screen name="Search" component={Search} />
      <HomeTabs.Screen name="Product" component={Product} />
    </HomeTabs.Navigator>
  );
};

export default index;
