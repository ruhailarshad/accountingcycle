import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import rootReducer from '../reducers'
import { services } from '../../services';

export default function configureStore(preloadedState) {
    const middlewares = [thunk.withExtraArgument({services})];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    return store;
}

