const React = require('react')

class Layout extends React.Component {
  render () {
    const { firstName, lastName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber, currentTag, currentType, showPage, indexPage, postType, newPage } = this.props
    return (
      <html lang='en'>
        <head>
          <title>My Media</title>
          <link rel='stylesheet' href='/css/app.css' />
          <script defer src='/js/app.js' />
        </head>

        <body>
          <div id='container'>
            <div id='header' style={{ backgroundImage: `url(${headerBackground})` }}>
              <div id='navigation'>
                <a className={`main-link ${indexPage ? 'active' : ''}`} href='/posts'>Home</a>
                <div className={`main-link new-post-link ${newPage ? 'active' : ''}`}>New Post</div>
                <a className='main-link' href='/user/logout'>Logout</a>

                <div className='new-posts'>
                  <a href='/posts/new/movie'>Movie</a>
                  <a href='/posts/new/album'>Album</a>
                  <a href='/posts/new/song'>Song</a>
                  <a href='/posts/new/tvseries'>TV Show</a>
                  <a href='/posts/new/podcast'>Podcast</a>
                  <a href='/posts/new/book'>Book</a>
                </div>
              </div>

              <div className='pic-and-name'>
                <div className='profile-icon' style={{ backgroundImage: `url(${profilePicture})` }} />
                {firstName} {lastName}
              </div>

              <div id='post-count'>
                {
                    !currentTag
                      ? movieNumber === 0 && albumNumber === 0 && songNumber === 0 && tvSeriesNumber === 0 && podcastNumber === 0 && bookNumber === 0
                        ? <span className='nav-title'>You do not have any posts.</span>
                        : <>
                          <a className={currentType === 'movie' || postType === 'movie' ? 'active' : ''} href='/posts/category/movie'><span className='icon icon-movie' /><span>{movieNumber} {movieNumber === 0 || movieNumber > 1 ? 'Movies' : 'Movie'}</span></a>
                          <a className={currentType === 'album' || postType === 'album' ? 'active' : ''} href='/posts/category/album'><span className='icon icon-album' /><span>{albumNumber} {albumNumber === 0 || albumNumber > 1 ? 'Albums' : 'Album'}</span></a>
                          <a className={currentType === 'song' || postType === 'song' ? 'active' : ''} href='/posts/category/song'><span className='icon icon-song' /><span>{songNumber} {songNumber === 0 || songNumber > 1 ? 'Songs' : 'Song'}</span></a>
                          <a className={currentType === 'tvseries' || postType === 'tvseries' ? 'active' : ''} href='/posts/category/tvseries'><span className='icon icon-tvseries' /><span>{tvSeriesNumber} {tvSeriesNumber === 0 || tvSeriesNumber > 1 ? 'TV Shows' : 'TV Show'}</span></a>
                          <a className={currentType === 'podcast' || postType === 'podcast' ? 'active' : ''} href='/posts/category/podcast'><span className='icon icon-podcast' /><span>{podcastNumber} {podcastNumber === 0 || podcastNumber > 1 ? 'Podcasts' : 'Podcast'}</span></a>
                          <a className={currentType === 'book' || postType === 'book' ? 'active' : ''} href='/posts/category/book'><span className='icon icon-book' /><span>{bookNumber} {bookNumber === 0 || bookNumber > 1 ? 'Books' : 'Book'}</span></a>
                        </>
                      : currentTag
                        ? <span className='nav-title'>Showing posts tagged with "<i>{currentTag}</i>".</span>
                        : ''
                  }
              </div>
            </div>

            <div id='content-container' className={showPage ? 'show-page' : indexPage ? 'index-page' : ''}>
              {this.props.children}
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Layout
