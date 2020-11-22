import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppContext } from '../AppContext';


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
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Custom Google Login Button
                    </button>
                )
            }
        />
    );
  };
  export default GoogleLoginButton;