import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

   
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('role', 'normie')

    }
    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('role');

      return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
}
if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role');
    return role ? Promise.resolve(role) : Promise.reject();
}
    return Promise.resolve();
}