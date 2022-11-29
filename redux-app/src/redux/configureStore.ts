import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redurcers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState: any) {
    const composeEnhancers = compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
}
