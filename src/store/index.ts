import { createStore, Store } from 'redux';
import { rootReducer } from 'reducers';
import { RootState } from 'state';

export function configureStore(initialState?: RootState): Store<RootState> {
    const store = createStore(rootReducer as any, initialState as any) as Store<RootState>;

    return store;
}
