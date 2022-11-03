const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    const { albums } = this.props
    // const type = this.props.type
    // console.log(type)
    // const types = monsters.filter(object => object.primaryType === type || object.secondaryType === type)

    return (
      <Default>
        <form method='POST' action='/posts'>
            <input type='text' name='albumTitle' placeholder='Title' required /><br />
            <input type='text' name='albumArtist' placeholder='Artist' required /><br />
            <input type='text' name='albumRating' placeholder='Rating' required /><br />
            <input className='url-field' type='url' name='albumArtUrl' placeholder='URL' required /><br />
            <div class="alert">needs to be a url</div>
            <input type='text' name='tagOne' placeholder='Tag' required /><br />
            <input type='text' name='tagTwo' placeholder='Tag' required /><br />
            <input type='text' name='tagThree' placeholder='Tag' required /><br />
            <input type="text" name='albumReview' placeholder='Review' required /><br />

            <input type='submit' value='Add' />
          </form>
      </Default>
    )
  }
}

module.exports = New