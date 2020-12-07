import React, { useContext } from 'react'
import useJWT from '../../hooks/useJWT'
import useModal from '../../hooks/useModal'
import { AppState } from '../../interfaces'
import { AppContext } from '../AppContext'
import BaseModal from './BaseModal'

const LogoutModal: React.FC = () => {
  const { closeModal } = useModal()
  const [, setState] = useContext(AppContext)
  const { eraseToken } = useJWT()
  const logout = async (): Promise<void> => {
    setState((state: AppState) => ({ ...state, checkingAuth: true }))
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/logout/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    eraseToken()
    closeModal()
  }
  return (
    <BaseModal title="Log out">
      <div className="max-w-2xl flex flex-col">
        <div className="p-8 focus:border-b focus:border-purple-500">
          <div className="w-full flex items-center justify-between flex-col">
            <p>Please confirm you want to log out</p>
            <button
              className="bg-red-700 text-white hover:bg-red-900 focus:bg-gray-100 focus:ring-2 w-full mt-8 p-4"
              onClick={() => logout()}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export default LogoutModal
