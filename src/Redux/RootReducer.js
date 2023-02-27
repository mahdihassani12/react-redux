import { combineReducers } from "redux";
import { cakeReducer } from './Cakes/CakeReducers';
import { usersReducer } from './Users/UsersReducer';

const RootReducer = combineReducers({
    cake: cakeReducer,
    users: usersReducer
})

export default RootReducer;