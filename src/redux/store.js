import { applyMiddleware, compose, createStore } from "redux";

const initialState = {};

const composeEnhancers = compose( applyMiddleware(...middleware));

const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers
    );
    
    return store;
    }

export default configureStore