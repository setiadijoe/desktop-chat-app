const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const { CONSTANT } = require('./constants');

const chatkit = new Chatkit.default({
  instanceLocator: CONSTANT.INSTANCE_LOCATOR,
  key: CONSTANT.SECRET_KEY
});

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.post('/users', (req, res) => {
  const { username } = req.body;
  const user = { name: username, id: username };
  chatkit
    .createUser(user)
    .then(() => {
      console.log('Created user ', user.name);
      res.status(201).json(user);
    })
    .catch((err) => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log('User already exists ', user.name)
        res.status(201).json(user)
      } else {
        console.error(err)
        res.status(err.status).json(err)
      }
    })
})

server.listen(3001, () => {
  console.log('====================================');
  console.log('Server running on port 3001');
  console.log('====================================');
})
