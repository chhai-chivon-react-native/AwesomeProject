/**
 * Created by chhaichivon on 8/27/17.
 */
import { createStore } from 'redux';
import reducers from './../reducers/reducer';

export default function configureStore() {
    let store = createStore(reducers);
    return store;
}