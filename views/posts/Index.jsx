const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { albums } = this.props
    return (
      // <Default>
        <ul>
          {
          albums.length
            ? albums.map((album) => {
              const { name, color, colorName, readyToEat, createdAt } = album

              return (
                <li key={album._id}>

                </li>
              )
            }).reverse()
            : 'No posts to show'
        }
        </ul>
      // </Default>
    )
  }
}

module.exports = Index
