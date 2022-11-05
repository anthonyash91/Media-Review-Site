const React = require('react')

class LoginOut extends React.Component {
  render () {
    return (
      <html lang='en'>
        <head>
          <title>My Media</title>
          <link rel='stylesheet' href='/css/app-login.css' />
          <script defer src='/js/login.js' />
        </head>

        <body>
          <div id='container'>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = LoginOut
