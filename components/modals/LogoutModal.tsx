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
                    <div className="w-full flex space-between">

                    <p>Please confirm you want to log out</p>
                    <button className="bg-red-700 text-white p-4 hover:bg-red-900 focus:bg-gray-100 focus:ring-2" onClick={() => logout()}>Log out</button>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};

export default LogoutModal;