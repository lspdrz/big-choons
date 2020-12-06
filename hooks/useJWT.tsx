// Referenced this article:
// https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html

import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { User } from "../interfaces";

const useJWT = () => {
  const [state, setState] = useContext(AppContext);

  const logoutEventName = 'big-choons-logout';
  let refreshTimeOutId: number;

  // This listener allows to disconnect another session started in another tab
  if (typeof window !== "undefined") {
      window.addEventListener('storage', (event) => {
          if (event.key === logoutEventName) {
            setState((state: any) => ({ ...state, user: null, jwt: null }));
          }
      });
  }

  // This countdown feature is used to renew the JWT in a way that is transparent to the user.
  // before it's no longer valid
  const refreshToken = (delay: number) => {
      refreshTimeOutId = window.setTimeout(
          getRefreshedToken,
          delay * 1000 - 5000
      ); // Validity period of the token in seconds, minus 5 seconds
  };

  const abortRefreshToken = () => {
      if (refreshTimeOutId) {
          window.clearTimeout(refreshTimeOutId);
      }
  };

  // The method makes a call to the refresh-token endpoint
  // If there is a valid cookie, the endpoint will return a fresh jwt.
  const getRefreshedToken = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/token/refresh/`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'include',
      })
      if (res.status !== 200) {
          eraseToken()
          return { token: "", expiry: "" }
      } else {
          const resJson = await res.json()
          const refreshedUser: User = {
              id: resJson.id,
              username: resJson.username,
              name: resJson.name,
              email: resJson.email
          }
          if (resJson.access_token) {
              setTokenAndUser(refreshedUser, resJson.access_token, resJson.access_token_expiry)
              return true
          }
          return false
      }
  };

  const setTokenAndUser = (refreshedUser: User, token: string, expiry: string) => {
    setState((state: any) => ({ ...state, user: refreshedUser, jwt: token, checkingAuth: false }));
    const startDate = new Date();
    const endDate = new Date(parseInt(expiry) * 1000)
    const delay = (endDate.getTime() - startDate.getTime()) / 1000
    refreshToken(delay);
    return true;
  };

  const eraseToken = () => {
    setState((state: any) => ({ ...state, user: null, jwt: null, checkingAuth: false }));
    abortRefreshToken();
    if (typeof window !== "undefined") {
        window.localStorage.setItem(logoutEventName, Date.now().toString());
    }
    return true;
  }

  return {
      eraseToken,
      setTokenAndUser,
      jwt: state.jwt,
      user: state.user,
      checkingAuth: state.checkingAuth,
      getRefreshedToken,
  }
};

export default useJWT;