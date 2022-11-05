const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { posts, fullName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber, indexPage } = this.props
    // console.log(collection)
    return (
      <Default fullName={fullName} headerBackground={headerBackground} profilePicture={profilePicture} movieNumber={movieNumber} albumNumber={albumNumber} songNumber={songNumber} tvSeriesNumber={tvSeriesNumber} podcastNumber={podcastNumber} bookNumber={bookNumber} indexPage='true'>

        <>
          {/* <a href='/posts/new/movie'>New Movie</a><br />
          <a href='/posts/new/album'>New Album</a><br />
          <a href='/posts/new/song'>New Song</a><br />
          <a href='/posts/new/tvseries'>New TV Series</a><br />
          <a href='/posts/new/podcast'>New Podcast</a><br />
          <a href='/posts/new/book'>New Book</a><br /><br /> */}
          {
          posts
            ? posts.map((post) => {
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
                      <div className='rating'>
                        {rating === '0'
                          ? <>
                            <span className='icon-star-empty' />
                            <span className='icon-star-empty' />
                            <span className='icon-star-empty' />
                            <span className='icon-star-empty' />
                            <span className='icon-star-empty' />
                            </>
                          : rating === '0.5'
                            ? <>
                              <span className='icon-star-half' />
                              <span className='icon-star-empty' />
                              <span className='icon-star-empty' />
                              <span className='icon-star-empty' />
                              <span className='icon-star-empty' />
                              </>
                            : rating === '1'
                              ? <>
                                <span className='icon-star-full' />
                                <span className='icon-star-empty' />
                                <span className='icon-star-empty' />
                                <span className='icon-star-empty' />
                                <span className='icon-star-empty' />
                                </>
                              : rating === '1.5'
                                ? <>
                                  <span className='icon-star-full' />
                                  <span className='icon-star-half' />
                                  <span className='icon-star-empty' />
                                  <span className='icon-star-empty' />
                                  <span className='icon-star-empty' />
                                  </>
                                : rating === '2'
                                  ? <>
                                    <span className='icon-star-full' />
                                    <span className='icon-star-full' />
                                    <span className='icon-star-empty' />
                                    <span className='icon-star-empty' />
                                    <span className='icon-star-empty' />
                                    </>
                                  : rating === '2.5'
                                    ? <>
                                      <span className='icon-star-full' />
                                      <span className='icon-star-full' />
                                      <span className='icon-star-half' />
                                      <span className='icon-star-empty' />
                                      <span className='icon-star-empty' />
                                      </>
                                    : rating === '3'
                                      ? <>
                                        <span className='icon-star-full' />
                                        <span className='icon-star-full' />
                                        <span className='icon-star-full' />
                                        <span className='icon-star-empty' />
                                        <span className='icon-star-empty' />
                                        </>
                                      : rating === '3.5'
                                        ? <>
                                          <span className='icon-star-full' />
                                          <span className='icon-star-full' />
                                          <span className='icon-star-full' />
                                          <span className='icon-star-half' />
                                          <span className='icon-star-empty' />
                                          </>
                                        : rating === '4'
                                          ? <>
                                            <span className='icon-star-full' />
                                            <span className='icon-star-full' />
                                            <span className='icon-star-full' />
                                            <span className='icon-star-full' />
                                            <span className='icon-star-empty' />
                                            </>
                                          : rating === '4.5'
                                            ? <>
                                              <span className='icon-star-full' />
                                              <span className='icon-star-full' />
                                              <span className='icon-star-full' />
                                              <span className='icon-star-full' />
                                              <span className='icon-star-half' />
                                              </>
                                            : rating === '5'
                                              ? <>
                                                <span className='icon-star-full' />
                                                <span className='icon-star-full' />
                                                <span className='icon-star-full' />
                                                <span className='icon-star-full' />
                                                <span className='icon-star-full' />
                                                </>
                                              : ''}
                      </div>
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

module.exports = Index
