import Link from 'next/link'
import React from 'react'

import { openModal } from 'components/Modals/modalsSlice'
import modalConfirms from 'constants/confirms/modalConfirms'
import { useAppDispatch, useAppSelector } from 'hooks'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  return (
    <nav className="p-2 h-15 w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 z-10 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <p className=" text-purple-600">
          <Link href="#">Big Choonz</Link>
        </p>
        {user ? (
          <div className="flex">
            <p className="ml-4 text-purple-600">
              {/* TODO: Change focus to something else for accessibility */}
              <button
                className="focus:outline-none"
                onClick={() => dispatch(openModal(modalConfirms.SEARCH_MODAL))}
              >
                + Song
              </button>
            </p>
            <p className="ml-4 text-black">
              <Link href="#">Profile</Link>
            </p>
            <p className="ml-4 text-black">
              <button
                className="focus:outline-none"
                onClick={() => dispatch(openModal(modalConfirms.LOGOUT_MODAL))}
              >
                Logout
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
export default Header
