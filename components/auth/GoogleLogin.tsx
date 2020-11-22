import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppContext } from '../AppContext';
import G from './G';


const CLIENT_ID: string = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string;


const GoogleLoginButton = () => {
    const [_state, setState] = useContext(AppContext);
    
    const login = async (response: any) => {
        if (response.accessToken) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/google/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: `${response.accessToken}`
                })
            })
            const resJson = await res.json()
            const user = {
                id: resJson.id,
                username: resJson.username,
                name: resJson.name,
                email: resJson.email
            }
            localStorage.setItem("user", JSON.stringify(user));
            setState((state: any) => ({ ...state, user: user, jwt: resJson.access_token }));
        }
    }

    const handleLoginFailure = (_response: any) => {
        alert('Failed to log in')
    }

    return (
        <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Login'
            onSuccess={ login }
            onFailure={handleLoginFailure}
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
            render={
                renderProps => (
                    <button autoFocus className="bg-white flex flex-row content-between shadow p-4 mx-auto mt-8 border border-gray-300 hover:bg-gray-200 focus:bg-gray-100 focus:ring-2" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                       <G /> <span className="pl-4 leading-8 font-bold">
                          Log in with Google
                           </span>
                    </button>
                )
            }
        />
    );
  };
  export default GoogleLoginButton;