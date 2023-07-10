import Authentication from '../components/Auth/Authentication'
import Home from './home'
import { isLoggedIn } from '../utils/isLoggedIn'
const Auth = () => {
  
  return (
    <>
    {
      isLoggedIn() ? <Home /> : <Authentication />
    }
    </>
  )
}

export default Auth
