const React = require('react')
const Default = require('../layouts/Default')

class Category extends React.Component {
  render () {
    const { posts, firstName, lastName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber, indexPage } = this.props
    const tag = this.props.tag

    const tagName = posts.filter(object => object.type === tag)

    return (
      <Default firstName={firstName} lastName={lastName} headerBackground={headerBackground} profilePicture={profilePicture} movieNumber={movieNumber} albumNumber={albumNumber} songNumber={songNumber} tvSeriesNumber={tvSeriesNumber} podcastNumber={podcastNumber} bookNumber={bookNumber} currentType={tag} indexPage='true'>

        <>
          {
          tagName
            ? tagName.map((post) => {
              const { imageUrl, title, mainPeople, mp3, rating, review, _id, tag1, tag2, tag3, type, createdAt } = post
              const options = { year: 'numeric', month: 'short', day: 'numeric' }
              const capPostType = type.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
              // const tagsToArray = tags.split(' ')
              return (
                <div className='post-container' key={post._id}>
                  <div className='post-background' style={{ backgroundImage: `url(${imageUrl})` }} />
                  <div className='post-background-picture' style={{ backgroundImage: `url(${imageUrl})` }} />

                  {type === 'song' && mp3 ? <><div class='audio-player'><audio src={mp3} controls='true' /></div></> : ''}
                  <div className='post-info'>
                    <div className='type-date'>
                      <div className='type'><a href={`/posts/${type}/${post._id}`}>{type === 'tvseries' ? 'TV Show' : capPostType}</a></div>
                      <div className='date'><span>{createdAt.toLocaleDateString(undefined, options)}</span></div>
                    </div>

                    <div className='review'>
                      <h1>{title}</h1>
                      <div class='media-info'>{type === 'movie' ? 'Directed by ' : type === 'album' || type === 'song' ? 'By ' : type === 'tvseries' ? 'Cast: ' : type === 'podcast' ? 'Hosted by: ' : type === 'book' ? 'Author: ' : ''}{mainPeople}</div>
                      <div className='review-text'>{review}</div>

                      <div className='tags'>
                        <a href={`/posts/tag/${tag1}`}>#{tag1}</a>, <a href={`/posts/tag/${tag2}`}>#{tag2}</a>, <a href={`/posts/tag/${tag3}`}>#{tag3}</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }).reverse()
            : 'No posts to show'
          }
        </>

      </Default>
    )
  }
}

module.exports = Category
