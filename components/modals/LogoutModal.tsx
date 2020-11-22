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
                <div className="flex items-center justify-between focus:border-b focus:border-purple-500">
                    <p>Do you really want to log out?</p>
                    <button onClick={() => closeModal()}>No</button>
                    <button onClick={() => logout()}>Yes</button>
                </div>
            </div>
        </BaseModal>
    );
};

export default LogoutModal;
