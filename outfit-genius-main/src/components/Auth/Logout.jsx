import React from 'react'
import Cookies from 'js-cookie'

const Logout = () => {
  // removing cookie of token and redirecting to home page
  Cookies.remove('token')
  alert("You have been logged out")
  window.location.href = '/'
  return (
    <div>
      
    </div>
  )
}

export default Logout
