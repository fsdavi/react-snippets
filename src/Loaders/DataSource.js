import React, { useState, useEffect } from 'react';

// The idea of this component is use a generic function to get any type of data and pass to the child component

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
	const [state, setState] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await getDataFunc();
			setState(data);
		})();
	}, [getDataFunc]);

	return (
		<>
		{React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { [resourceName]: state });
			}

			return child;
		})}
		</>
	);
}