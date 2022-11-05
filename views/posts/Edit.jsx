const React = require('react')
const Layout = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { posts, firstName, lastName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber, showPage } = this.props
    const { imageUrl, title, mainPeople, mp3, rating, review, tag1, tag2, tag3, type, _id } = this.props.post
    const postType = this.props.postType
    const capPostType = postType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')

    return (
      <Layout firstName={firstName} lastName={lastName} headerBackground={headerBackground} profilePicture={profilePicture} movieNumber={movieNumber} albumNumber={albumNumber} songNumber={songNumber} tvSeriesNumber={tvSeriesNumber} podcastNumber={podcastNumber} bookNumber={bookNumber} showPage='true' postType={type}>
        <div className='show-container'>
          <h1>Edit {title}</h1><br />
          <form method='POST' action={`/posts/${postType}/${_id}?_method=PUT`}>
            <input
              type='url' name='imageUrl' placeholder={postType === 'movie'
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
                          : ''} defaultValue={imageUrl} required
            />
            <input
              type='text' name='title' placeholder={postType === 'movie'
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
                          : ''} defaultValue={title} required
            />
            {postType === 'song' ? <><input type='text' name='mp3' placeholder='Song MP3 URL' defaultValue={mp3} /></> : ''}
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
                          : ''} defaultValue={mainPeople} required
            />
            <select name='rating' defaultValue={rating} required>
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
            <textarea type='text' className='review-box' name='review' placeholder='Review' defaultValue={review} required />
            <div className='tags-container'>
              <input className='tag-input' type='text' name='tag1' placeholder='Tag One' defaultValue={tag1} required />
              <input className='tag-input' type='text' name='tag2' placeholder='Tag Two' defaultValue={tag2} required />
              <input className='tag-input' type='text' name='tag3' placeholder='Tag Three' defaultValue={tag3} required />
            </div>
            <input type='hidden' name='type' value={postType} />
            <input type='submit' value={`Edit ${title}`} />
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
