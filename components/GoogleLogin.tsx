import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppContext } from './AppContext';


const CLIENT_ID: string = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string;


const GoogleLoginButton = () => {
    const [state, setState] = useContext(AppContext);
    
    const login = async (response: any) => {
        if (response.accessToken) {
            console.log('hi access token from google')
            console.log(response.accessToken)
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
                username: resJson.username
            }
            console.log('hi res json')
            console.log(resJson)
            console.log(user)
            setState((state: any) => ({ ...state, user: user, jwt: resJson.access_token }));
            console.log('hiii')
            console.log(state)
        }
    }

    const handleLoginFailure = () => {
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
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Custom Google Login Button
                    </button>
                )
            }
        />
    );
  };
  export default GoogleLoginButton;