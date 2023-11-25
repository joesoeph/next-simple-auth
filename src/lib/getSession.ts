import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export function getSession() {
  let userInfo, isAuthenticated;
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    const decoded: any = jwt.decode(accessToken);
    userInfo = decoded.userInfo;
    isAuthenticated = true;
  }

  return { userInfo, isAuthenticated };
}
