import { CurrentUserLoader } from '../Loaders/CurrentUserLoader';
import { UserLoader } from '../Loaders/UserLoader';
import { UserInfo } from '../Loaders/components/UserInfo';
import { ResourceLoader } from '../Loaders/components/ResourceLoader';

function App() {
	return (
		<>
    <CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>
		<UserLoader userId="123">
			<UserInfo />
		</UserLoader>

    <ResourceLoader resourceUrl="/users/123" resourceName="user">
			<UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/1234" resourceName="product">
			<ProductInfo />
		</ResourceLoader>
		</>
	);
}

export default App;