import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userreducer } from "./reducer/userreducer";
import { postreducer } from "./reducer/postreducer";


const reducer=combineReducers({
    user:userreducer,
    post:postreducer
});

let initialstate={
    user:{user:localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile")):null}
};

const middleware = [thunk];

const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)));

export default store;