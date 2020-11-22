import React, { useContext } from "react";
import useModal from "../../hooks/useModal";
import { AppContext } from "../AppContext";
import BaseModal from "./BaseModal";

const LogoutModal = () => {
    const { closeModal } = useModal();
    const [_state, setState] = useContext(AppContext);
    const logout = () => {
        localStorage.setItem("user", JSON.stringify(''));
        setState((state: any) => ({ ...state, user: null }));
        closeModal()
    }
    return (
        <BaseModal title="Log out">
            <div className="max-w-2xl flex flex-col">
                <div className="p-8 flex flex-col focus:border-b focus:border-purple-500">
                    <div className="w-full flex justify-start">

                    <p>Do you really want to log out?</p>
                    </div>
                    <div className="w-full flex flex-row justify-end">

                    <button className="bg-white p-4 mr-4 border border-gray-300 hover:bg-gray-200 focus:bg-gray-100 focus:ring-2" onClick={() => closeModal()}>Nevermind</button>
                    <button className="bg-white p-4 border border-gray-300 hover:bg-gray-200 focus:bg-gray-100 focus:ring-2" onClick={() => logout()}>Yes</button>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};

export default LogoutModal;
