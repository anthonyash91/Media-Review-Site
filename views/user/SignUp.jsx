const React = require('react')
const LoginOut = require('../layouts/LoginOut')

class SignUp extends React.Component {
  render () {
    return (
      <LoginOut>
        <h1>Create a MyMedia Account</h1><br />
        <form action='/user/signup' method='POST'>
          <input type='text' name='firstName' placeholder='First Name' required />
          <input type='text' name='lastName' placeholder='Last Name' required />
          <div className='background-chosen' />
          <input type='url' name='headerBackground' className='bg-input' placeholder='Header Background URL' required />
          <div className='picture-chosen' />
          <input type='url' name='profilePicture' className='picture-input' placeholder='Profile Picture URL' required />
          <input type='text' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' value='Create Account' />
        </form>
      </LoginOut>
    )
  }
}

module.exports = SignUp
