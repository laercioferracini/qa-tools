const express = require('express'); //server
const chalk = require('chalk'); //colorized you output
const debug = require('debug')('qatools') //smart way to debug apps
const morgan = require('morgan') //depency to check requests on app.
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express();

app.use(morgan('tiny')); //combined to get more details
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './src/views/');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'QA Tools', data: ['a', 'b', 'c'] });
})

app.listen(PORT, () => { debug(`listening on port: ${chalk.green(PORT)}`) }) // example of template string `${whatever}`

/**
 * debug
 * in linux run DEBUG=* node app.js
 * in linux run DEBUG=qatools node app.js
 * in windows run DEBUG=* & node app.js
 */