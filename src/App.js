import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import { Provider } from "react-redux";
import store from './Redux/store';
import UsersContainer from "./Components/UsersContainer";

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
