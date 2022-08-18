import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "store/root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("                                      ");
  console.log("-----------------Logger-----------------");
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("current state: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
  console.log("----------------------------------------");
  console.log("                                      ");
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
