import { AUTH_LOGIN, AUTH_LOGOUT } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

   
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

    }
    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');

      return Promise.resolve();
  }
    return Promise.resolve();
}