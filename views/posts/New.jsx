const React = require('react')
const Layout = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    const { posts, fullName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber, showPage, newPage } = this.props
    const postType = this.props.postType
    const capPostType = postType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')

    return (
      <Layout fullName={fullName} headerBackground={headerBackground} profilePicture={profilePicture} movieNumber={movieNumber} albumNumber={albumNumber} songNumber={songNumber} tvSeriesNumber={tvSeriesNumber} podcastNumber={podcastNumber} bookNumber={bookNumber} showPage='true' newPage='true'>
        <div className='show-container'>
          <h1>Add a New {postType === 'tvseries' ? 'TV Show' : capPostType}</h1><br />
          <form method='POST' action='/posts'>
            <input
              type='url' className='poster-input' name='imageUrl' placeholder={postType === 'movie'
                ? 'Movie Poster URL'
                : postType === 'album'
                  ? 'Album Art URL'
                  : postType === 'song'
                    ? 'Single Art URL'
                    : postType === 'tvseries'
                      ? 'TV Poster URL'
                      : postType === 'podcast'
                        ? 'Podcast Poster URL'
                        : postType === 'book'
                          ? 'Book Cover URL'
                          : ''} required
            />

            <div className='poster-container'>
              <div className='preview-background' />
              <div className='preview-foreground' />
            </div>

            <input
              className='media-title' type='text' name='title' placeholder={postType === 'movie'
                ? 'Movie Title'
                : postType === 'album'
                  ? 'Album Title'
                  : postType === 'song'
                    ? 'Song Title'
                    : postType === 'tvseries'
                      ? 'Show Title'
                      : postType === 'podcast'
                        ? 'Podcast Title'
                        : postType === 'book'
                          ? 'Book Title'
                          : ''} required
            />
            {postType === 'song' ? <><input type='text' name='mp3' placeholder='Song MP3 URL' /></> : ''}
            <input
              type='text' name='mainPeople' placeholder={postType === 'movie'
                ? 'Movie Director'
                : postType === 'album'
                  ? 'Album Artist'
                  : postType === 'song'
                    ? 'Song Artist'
                    : postType === 'tvseries'
                      ? 'Main Cast'
                      : postType === 'podcast'
                        ? 'Hosts'
                        : postType === 'book'
                          ? 'Author'
                          : ''} required
            />
            <select name='rating' required>
              <option value=''>Rating</option>
              <option value='0'>0</option>
              <option value='0.5'>0.5</option>
              <option value='1'>1</option>
              <option value='1.5'>1.5</option>
              <option value='2'>2</option>
              <option value='2.5'>2.5</option>
              <option value='3'>3</option>
              <option value='3.5'>3.5</option>
              <option value='4'>4</option>
              <option value='4.5'>4.5</option>
              <option value='5.5'>5.5</option>
            </select>
            <textarea type='text' className='review-box' name='review' placeholder='Review' required />
            <div className='tags-container'>
              <input className='tag-input' type='text' name='tag1' placeholder='Tag One' required />
              <input className='tag-input' type='text' name='tag2' placeholder='Tag Two' required />
              <input className='tag-input' type='text' name='tag3' placeholder='Tag Three' required />
            </div>
            <input type='hidden' name='type' value={postType} />
            <input className='media-submit' type='submit' value={postType === 'tvseries' ? 'Add TV Show' : `Add ${capPostType}`} />
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = New
