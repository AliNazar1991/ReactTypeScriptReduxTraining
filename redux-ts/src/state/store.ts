import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Thunk is used to make asynch calls the redux way.
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
