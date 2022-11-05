const React = require('react')
const Default = require('../layouts/Default')

class SignUp extends React.Component {
  render () {
    return (
    // <Default>
      <form action='/user/signup' method='POST'>
        <fieldset>
          <legend>New User</legend>
          <label>First Name: <input type='text' name='firstName' required /> </label>
          <label>Last Name: <input type='text' name='lastName' required /> </label>
          <label>Header Background: <input type='text' name='headerBackground' required /> </label>
          <label>Profile Picture: <input type='text' name='profilePicture' required /> </label>
          <label>USERNAME: <input type='text' name='username' required /> </label>
          <label>PASSWORD: <input type='password' name='password' required />
          </label>
          <input type='submit' value='Create Account' />
        </fieldset>
      </form>
    // </Default>
    )
  }
}

module.exports = SignUp
