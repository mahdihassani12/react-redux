import { createStore } from "redux";
import { cakeReducer } from "./Cakes/CakeReducers";

const store = createStore(cakeReducer);
export default store;