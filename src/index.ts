import http from 'http';
import url from 'url';
import fsp from 'fs/promises';
import path from 'path';
import { User } from './types/user';
import { getUser } from './utils/getUser';
import { isGetUserErrorCode } from './types/errors';
import { GET_USER_STATUSES } from './constants/constants';

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url ?? '', true);

  const requestPath = parsedUrl.pathname;

  const method = req.method;

  const usersDataJSON = await fsp.readFile(path.join(__dirname, 'db', 'db.json'), 'utf-8');

  const usersData: User[] = JSON.parse(usersDataJSON);

  switch (true) {
    case method === 'GET' && requestPath === '/api/users':
      res.writeHead(200, { 'Content-Type': 'application/json' });

      res.end(JSON.stringify(usersData));

      break;
    case method === 'GET' && requestPath && requestPath.startsWith('/api/users/'):
      try {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(getUser(requestPath, usersData)));
      } catch (error) {
        if (error instanceof Error && isGetUserErrorCode(error.message)) {
          res.writeHead(+error.message, { 'Content-Type': 'application/json' });
          res.end(GET_USER_STATUSES[error.message]);
        }
      }

      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found\n');
  }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
