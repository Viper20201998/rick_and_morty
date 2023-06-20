import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain='viper2023.us.auth0.com'
		clientId='lIKCTZ1ObWaooqqjhtmGWIEDgqOFarL1'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<StrictMode>
			<App />
		</StrictMode>
	</Auth0Provider>
);
