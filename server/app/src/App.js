import { Fragment } from "react";
import KitchenAlert from "./components/KitchenAlert";

const App = () => {
  return (
    <Fragment>
      <div className="kitchen">
        <h1>AI Kitchen Helper</h1>
        <KitchenAlert />
      </div>
    </Fragment>
  );
};

export default App;
