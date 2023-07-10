export const isLoggedIn = () => {
  const token =  document.cookie.split("=")[1];
  if(!token){
    return false;
  }
  if(token){
    return true;
  }
  return false;
    };

