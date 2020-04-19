import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IProductNavProps } from "./HomeParamList";

interface IAddProps extends IProductNavProps<"ProductAdd"> {}

const Add: React.FC<IAddProps> = ({ route }) => {
  return (
    <View style={styles.containerStyles}>
      <Text>{route.name} Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Add;
