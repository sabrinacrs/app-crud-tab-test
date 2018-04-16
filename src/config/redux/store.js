import { createStore, applyMiddleware } from 'redux';
import { middleware } from './middleware';

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(middleware),
);

export default store;