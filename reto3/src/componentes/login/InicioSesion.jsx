import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";


const InicioSesion = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        </div>
    )
}

export default InicioSesion