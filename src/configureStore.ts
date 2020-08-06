import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createRootReducer, ApplicationState, rootSaga } from 'store';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(createRootReducer(), {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  // @ts-ignore
  return store;
}
