const express = require('express')
const app = express()
const data = new Date()

const sys = require('sys')
const exec = require('child_process').exec;



app.get('/', (req, res) => {
  res.send('Hi!' + data.toISOString())
  exec('ls', function (error, stdout, stderr) {
    if (error !== null) {
      console.log(error);
    } else {
      console.log('stdout: ', stdout);
      console.log('stderr: ', stderr);
    }
  });
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  g
  server.close(() => {
    console.debug('Process terminated')
  })
})

