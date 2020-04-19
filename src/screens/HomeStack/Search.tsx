import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IHomeNavProps } from "./HomeParamList";

interface ISearchProps extends IHomeNavProps<"Search"> {}

const Search: React.FC<ISearchProps> = ({ route }) => {
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

export default Search;
