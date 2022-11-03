const React = require('react')

class Layout extends React.Component {
  render () {
    const { indexPage, newPage, showPage, editPage, caughtPage, notCaughtPage, typePage, regionPage } = this.props

    return (
      <html lang='en'>
        <head>
          <title>My Media</title>
          <link rel='stylesheet' href='/css/app.css' />
          <script defer src='/js/app.js' />
          {newPage ? <script defer src='/js/new-app.js' /> : ''}
          {editPage ? <script defer src='/js/edit-app.js' /> : ''}
        </head>

        <body>


            {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
