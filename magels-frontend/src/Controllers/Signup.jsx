import React from 'react'

const Signup = () => {
  return (
    <div>
<form>
  <ul>
    <li>First Name <input type='text' name='firstName' placeholder='Fist Name'/></li>
    <li>Last Name <input type='text' name='lastName' placeholder='Last Name'/></li>
    <li>Street<input type='text' name='streetAddress'/></li>
    <li>Barangay<input type='text' name='brgyAddress' placeholder='Barangay'/></li>
    <li>City <input type='text' name='city' placeholder='City'/></li>
    <li>Email <input type='email' name='email' placeholder='Email'/></li>
    <li>Password <input type='password' name='password' placeholder='Password'/></li>
  </ul>





    
</form>
    </div>
  )
}
export default Signup
