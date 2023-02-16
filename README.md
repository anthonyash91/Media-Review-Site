
# MyMedia - Media Review Site

Heroku Deployment: [Deployed App](https://mymedia-ga.herokuapp.com/)

MyMedia is my take on a Letterboxd-esque website that allows users to post and review various types of media, like movies, albums, songs, podcasts, books, and tv shows.

### Trello Board
[Here is my Trello Board](https://trello.com/b/qJoEQ4hx/mymedia-project)

### Technologies and Resources Used
* JavaScript
* CSS
* HTML
* NodeJS and Express
* MongoDB
* Heroku

## Design
I wanted my design to be easy to read and interpret. I went with a gallery-type feel and ensured only a truncated version of the full review would appear on the index page so that the user felt more inticed to visit the show page if they wanted to read full reviews.

There are six types of media posts a user can submit: movie, album, song, tv show, podcast, and book. Each post type is labeled so the user understands what type of media they're reading a review on.

At the top of the page is a post counter that shows how many of each post type a user has. You can click these and you'll be taken to a page that will show you only that type of post. For example, if you click on "movies", you'll be taken to /posts/movies where all of your reviewed movies will show.

## ERD
![ERD](https://i.imgur.com/SU1Wt4n.png)

## Wireframing
![wireframes](https://i.imgur.com/TE5Ncdk.png)
![wireframes](https://i.imgur.com/HTv3XyV.png)

## Screenshots
![completed project - index page](https://i.imgur.com/Xu2LCm8.png)
![completed project - show page](https://i.imgur.com/OeDcvbd.png)
![completed project - show page](https://i.imgur.com/3CkuTYb.png)
![completed project - show page comment section](https://i.imgur.com/KrmLr8x.png)
![completed project - category page](https://i.imgur.com/ECm0Tx6.png)
![completed project - add/create page](https://i.imgur.com/UAUi1Ak.png)

## Next Steps

I plan on learning how to implement likes/dislikes for each post, ratings for comments, and user profile pages. I plan on turning this into a full-fledged app like Letterboxd.

## Restful Routes

| Action    | URL                           | HTTP Verb | JSX Filename      | Mongoose Method        |
|-----------|-------------------------------|-----------|-------------------|------------------------|
| Index     | /posts                        | GET       | Index.jsx         | Post.find              |
| New       | /posts/new/:postType          | GET       | New.jsx           | None                   |
| Destroy   | /posts/:postType/:id/         | DELETE    | None              | Post.findByIdAndDelete |
| Update    | /posts/:postType/:id/         | PATCH/PUT | None              | Post.findByIdAndUpdate |
| Create    | /posts                        | POST      | None              | Post.create            |
| Edit      | /posts/:postType/:id/edit     | GET       | Edit.jsx          | Post.findById          |
| Show      | /posts/:postType/:id/         | GET       | Show.jsx          | Post.findById          |
| Edit      | /posts/:postType/:id/comments | PUT       | Show.jsx          | Post.findById          |
| Index     | /posts/tag/:tag               | GET       | Tag.jsx           | Post.find              |
| Index     | /category/:tag                | GET       | Category.jsx      | Post.find              |
