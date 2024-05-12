import { useEffect, useState } from 'react';

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return authenticated;
};
