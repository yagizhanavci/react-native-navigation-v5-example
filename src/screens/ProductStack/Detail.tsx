import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IProductNavProps } from "./HomeParamList";

interface IDetailProps extends IProductNavProps<"ProductDetail"> {}

const Detail: React.FC<IDetailProps> = ({ route }) => {
  return (
    <View style={styles.containerStyles}>
      <Text>{route.name} screen</Text>
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

export default Detail;
