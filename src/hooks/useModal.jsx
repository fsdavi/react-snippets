import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext<ModalContextData>({});

const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleModalState = () => {
		setIsOpen(!isOpen);
	};

	return <ModalContext.Provider value={{ isOpen, handleModalState }}>{children}</ModalContext.Provider>;
};

const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	return context;
};

export { ModalProvider, useModal };