import "react-native-gesture-handler";
import * as React from "react";
import Routes from "./src/Routes";
import { Provider, observer } from "mobx-react";
import stores from "./src/stores";
import "mobx-react-lite/batchingForReactNative";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <Provider {...stores}>
      <Routes />
    </Provider>
  );
};

export default observer(App);
