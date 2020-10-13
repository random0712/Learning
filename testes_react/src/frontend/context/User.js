import React, { createContext } from "react";

import useUser from './hooks/useUser';

const UserContext = createContext();

function UserProvider({ children }) {


	const {
	    user, handleLogin, handleLogout, loading, signin,
	 } = useUser();

	return (
		<UserContext.Provider value={{user, handleLogin, loading, handleLogout, signin}}>
			{children}
		</UserContext.Provider>
	)
};

export { UserContext, UserProvider }