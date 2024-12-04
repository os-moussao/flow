import http from 'node:http';

async function main() {
  const httpServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World !');
  });

  httpServer.listen(3000, () => {
    console.log(`\x1b[32mServer running on port 3000... \x1b[0m`);
  });
}

main();
