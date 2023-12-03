import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import productReducer from '../slicers/Product/productDetailsSlice';
import productFoundReducer from '../slicers/Product/SearchProductSlice';

const rootReducer = combineReducers({
  productDetails: productReducer,
  productsFound: productFoundReducer
});

export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'], // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;