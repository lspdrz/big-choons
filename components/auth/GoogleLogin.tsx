import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppContext } from '../AppContext';
import G from './G';
import jwtManager from './JWTManager';


const CLIENT_ID: string = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string;


const GoogleLoginButton = () => {
    const [_state, setState] = useContext(AppContext);

    const {setToken, getToken} = jwtManager
    
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
            setToken(resJson.access_token, resJson.access_token_expiry)
            const jwt = getToken()
            console.log('hi from google login')
            console.log(jwt)
            setState((state: any) => ({ ...state, user, jwt }));
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