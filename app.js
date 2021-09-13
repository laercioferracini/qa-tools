const express = require('express'); //server
const chalk = require('chalk'); //colorized you output
const debug = require('debug')('qatools') //smart way to debug apps
const morgan = require('morgan') //depency to check requests on app.
const path = require('path')
const app = express();
// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')))

app.get('/', (req, res) => {
    res.send('Hello from QA Tools')
})

app.listen(3000, () => { debug(`listening on port ${chalk.green('3000')}`) }) // example of template string `${whatever}`

/**
 * debug
 * in linux run DEBUG=* node app.js
 * in linux run DEBUG=qatools node app.js
 * in windows run DEBUG=* & node app.js
 */