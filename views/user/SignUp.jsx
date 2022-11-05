const React = require('react')
const LoginOut = require('../layouts/LoginOut')

class SignUp extends React.Component {
  render () {
    return (
      <LoginOut>
        <h1>Create a MyMedia Account</h1><br />
        <form action='/user/signup' method='POST'>
          <input type='text' name='fullName' className='full-name' placeholder='Name' required />
          <div className='background-chosen'><div className='picture-chosen' /><div className='name' /></div>
          <input type='url' name='headerBackground' className='bg-input' placeholder='Header Background URL' required />

          <input type='url' name='profilePicture' className='picture-input' placeholder='Profile Picture URL' required />
          <input type='text' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' className='create' value='Create Account' />
        </form>
        <br />
        Already have an account? <a href='/user/login'>Login!</a>
      </LoginOut>
    )
  }
}

module.exports = SignUp
