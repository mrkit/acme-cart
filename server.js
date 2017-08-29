const
      express = require('express'),
      nunjucks = require('nunjucks'),
      bodyParser = require('body-parser'),
      path = require('path'),
      routes = require('./routes/orders'),
      db = require('./models/_db'),
      models = require('./models').models;

const app = express();

nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(require('morgan')('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

app.use((err, req, res, next) => {
  res.render('error', err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
  db.sync({ force: true })
    .then( () => {
      //seed
      return Promise.all([
        models.Product.create({ name: 'ArtiADFficial Rock'}),
        models.Product.create({ name: 'Giant Rubber Band V1'}),
        models.Product.create({ name: 'Dehydrated Boulgers' }),
        models.Product.create({ name: 'Do-It-Yourself Tornado Kit'})
      ])
    })
    .catch(err => console.log(err.message));
});