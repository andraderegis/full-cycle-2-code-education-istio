import http from 'http';

const DEFAULT_TIMEOUT = process.env?.TIMEOUT || 6;
const SERVER_PORT = 3000;

const getTimeout = (maxSeconds) => {
  const timeout = Math.floor(Math.random() * maxSeconds) * 1000;

  return timeout ? timeout : 1000;
}

const server = http.createServer(async (req, res) => {
  if (process.env?.ERROR && process.env.ERROR === 'yes') {
    setTimeout(() => {
      res.statusCode = 504
      res.end();
    }, getTimeout(DEFAULT_TIMEOUT));
  } else {
    res.statusCode = 200;
    res.end('OK');
  }
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running at ${SERVER_PORT} port`);
});