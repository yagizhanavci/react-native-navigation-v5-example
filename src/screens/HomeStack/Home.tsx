import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IHomeProps {}
interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <View style={styles.containerStyles}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
