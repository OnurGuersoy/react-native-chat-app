import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Entry } from './src/components/entry';
import { SplashScreen } from './src/components/splash-screen';
import { apolloClient } from './src/network/apollo-client';
import { persistor, store } from './src/redux/store';

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<StoreProvider store={store}>
				<PersistGate persistor={persistor} loading={<SplashScreen />}>
					<Entry />
				</PersistGate>
			</StoreProvider>
		</ApolloProvider>
	);
}
