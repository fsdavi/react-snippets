import { CurrentUserLoader } from '../Loaders/CurrentUserLoader';
import { UserLoader } from '../Loaders/UserLoader';
import { UserInfo } from '../Loaders/components/UserInfo';

function App() {
	return (
		<>
    <CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>
		<UserLoader userId="123">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="234">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="345">
			<UserInfo />
		</UserLoader>
		</>
	);
}

export default App;