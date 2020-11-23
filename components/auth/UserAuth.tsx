import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import GoogleLoginButton from "./GoogleLogin";

const UserAuth = () => {
    return (
        <>
           <GoogleLoginButton />
        </>
    );
};

export default UserAuth;
