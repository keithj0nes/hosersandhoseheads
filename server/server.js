let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let massive = require('massive');

const app = express();

// const connectionInfo = {
//   host: 'localhost',
//   port: 3737,
//   database: 'hosersandhoseheads',
//   user: 'postgres',
//   password: ''
// };
//
// massive(connectionInfo).then(instance => {
//   app.set('db', instance);
// });

var conn = massive.connectSync({
  connectionString : 'postgres://postgres:@localhost/hosers_and_hoseheads'
});

// massive('postgres://postgres:@localhost:3737').then(instance => {
//   app.set('db', instance);
// });

app.set('db', conn);
var db = app.get('db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/api/google', function(req, res) {
  // console.log('REQ BODY: ', req.body);
  let b = req.body
  const blogPost = {
    post_title: b.postTitle,
    post_body: b.postBody,
    post_img_url: b.postImgUrl,
    draft: b.draft,
    news: b.news,
    playoffs: b.playoffs,
    rules: b.rules,
    weekly_recaps: b.weeklyRecaps
  }

  db.blog_posts.insert(blogPost, [], (err, insertedPost) => {
    if(err){
      console.log(err);
      res.status(500).send(err);
    }

    console.log(insertedPost, "here's the inserted post");
    res.send(insertedPost)

  })

  // console.log(blogPost, "blogPost");

});

app.listen(9000, () => {
  console.log('App listening on 9000');
});
