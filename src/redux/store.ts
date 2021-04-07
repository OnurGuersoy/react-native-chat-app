import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { authenticationReducer } from './auth/reducer';
import { settingsReducer } from './settings/reducer';

const rootReducer = combineReducers({
	authentication: authenticationReducer,
	settings: settingsReducer
});

const config = {
	key: 'root',
	storage: AsyncStorage
};

const persistedReducer = persistReducer(config, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
