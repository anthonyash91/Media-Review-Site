const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { fullName, headerBackground, profilePicture, movieNumber, albumNumber, songNumber, tvSeriesNumber, podcastNumber, bookNumber } = this.props
    const { imageUrl, title, mainPeople, mp3, rating, review, tag1, tag2, tag3, type, _id, createdAt, updatedAt, comments } = this.props.post
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    // const tagsToArray = tags.split(' ')

    return (
      <Default fullName={fullName} headerBackground={headerBackground} profilePicture={profilePicture} movieNumber={movieNumber} albumNumber={albumNumber} songNumber={songNumber} tvSeriesNumber={tvSeriesNumber} podcastNumber={podcastNumber} bookNumber={bookNumber} showPage='true' postType={type}>
        <div className='show-container'>
          <div className='post-container'>
            <div className='post-background' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='post-background-picture' style={{ backgroundImage: `url(${imageUrl})` }} />

            {type === 'song' && mp3 ? <><div class='audio-player'><audio src={mp3} controls='true' /></div></> : ''}
            <div className='post-info'>
              <div className='type-date'>
                <div className='type'><a href={`/posts/${type}/${_id}/edit`}>Edit this post</a></div>
              </div>
            </div>
          </div>

          <div className='review'>
            {/* <form method='POST' action={`/posts/${type}/${_id}?_method=DELETE`}><input type='submit' value={`Delete ${title}`} /></form> */}
            <div className='rating'>
              {rating === '0'
                ? <><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                : rating === '0.5'
                  ? <><span className='icon-star-half' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                  : rating === '1'
                    ? <><span className='icon-star-full' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                    : rating === '1.5'
                      ? <><span className='icon-star-full' /><span className='icon-star-half' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                      : rating === '2'
                        ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-empty' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                        : rating === '2.5'
                          ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-half' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                          : rating === '3'
                            ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-empty' /><span className='icon-star-empty' /></>
                            : rating === '3.5'
                              ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-half' /><span className='icon-star-empty' /></>
                              : rating === '4'
                                ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-empty' /></>
                                : rating === '4.5'
                                  ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-half' /></>
                                  : rating === '5'
                                    ? <><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /><span className='icon-star-full' /></>
                                    : ''}
            </div>
            <h1>{title}</h1>
            <div class='media-info'>{type === 'movie' ? 'Directed by ' : type === 'album' || type === 'song' ? 'By ' : type === 'tvseries' ? 'Cast: ' : type === 'podcast' ? 'Hosted by: ' : type === 'book' ? 'Author: ' : ''}{mainPeople}</div>

            {review}
            <div className='tags'>
              <div>Tags: <a href={`/posts/tag/${tag1}`}>#{tag1}</a>, <a href={`/posts/tag/${tag2}`}>#{tag2}</a>, <a href={`/posts/tag/${tag3}`}>#{tag3}</a></div>
              <div className='date'>{createdAt.toLocaleDateString(undefined, options)}</div>
            </div>
          </div>

          <div id='comments'>
            <h1>Comments</h1>
            {
          comments.length
            ? comments.map((comment) => {
              return (
                <div className='comment' key={comment._id}>
                  <div className='comment-icon' style={{ backgroundImage: `url(${comment.commentProfileIconUrl ? comment.commentProfileIconUrl : 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'})` }} />
                  <div className='comment-content'>
                    <p><strong>Name:</strong> {comment.commentName}</p>
                    <p><strong>Comment:</strong> {comment.commentBody}</p>
                    <div className='comment-date'>{updatedAt.toLocaleDateString(undefined, options)}</div>
                  </div>
                </div>
              )
            })
            : ''
        }
            <div className='post-comment'>
              <h1>Leave A Comment</h1>

              <div className='preview comment'>
                <div className='preview comment-icon' />
                <div className='preview comment-content'>
                  <p><strong>Name:</strong> <span className='preview-name' /></p>
                  <p><strong>Comment:</strong> <span className='preview-comment-body' /> </p>
                </div>
              </div>

              <form method='POST' action={`/posts/${type}/${_id}/comments?_method=PUT`}>
                <input className='avatar-input' type='url' name='commentProfileIconUrl' placeholder='Avatar Image URL' />
                <input className='comment-name-input' type='text' name='commentName' placeholder='Name' required />
                <textarea type='text' className='comment-input' name='commentBody' placeholder='Comment' required />
                <input type='submit' value='Submit Comment' />
              </form>
            </div>
          </div>
        </div>

      </Default>
    )
  }
}

module.exports = Show
