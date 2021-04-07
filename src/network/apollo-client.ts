import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = createHttpLink({
	uri: 'http://192.168.178.58:9000/graphql'
});

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const result = await AsyncStorage.getItem('persist:root');
	let token;
	if (result) {
		const reduxState = JSON.parse(result);
		const authObject = JSON.parse(reduxState.authentication);
		token = authObject.accessToken;
		console.log(token);
	}

	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});
