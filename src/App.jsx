import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Perfil from './components/Perfil';
function App() {
	const { isAthenticated } = useAuth0();

	return (
		<>
			<Header />
			<Navbar />

		</>
	);
	//<>{isAthenticated ? <></> : <></>}</>;
}
export default App;
