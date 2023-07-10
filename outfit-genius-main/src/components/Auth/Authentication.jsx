import Auth from './Auth';
import Login from './Login';
import Signup from './Signup';
import { UserProvider } from '../../context/userContext';
const Authentication = () => {
  return (
    <div>
      <UserProvider>
      <Auth login={<Login />} signup={<Signup />} />
      </UserProvider>
    </div>
  )
}

export default Authentication
