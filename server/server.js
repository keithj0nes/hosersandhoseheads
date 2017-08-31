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
  console.log('REQ BODY: ', req.body);

  // db.users.find()
  db.run('select * from users',(err, response) => {
    console.log(response);
    res.send(response);
    
  });
});

app.listen(9000, () => {
  console.log('App listening on 9000');
});
