const http = require('http');

// Define the port to listen on
const PORT = 9010;

// Create the server
const server = http.createServer((req, res) => {
    const host = req.headers.host; // Get the host
    const url = req.url;          // Get the requested URL path

    if (host === 'sky.snapi.com') {
        if (url === '/') {
            // Redirect root URL to the desired path
            res.writeHead(301, { Location: 'https://sky.snapi.com/b/DG7Q5om6lr74Fn1ulwbn' });
            res.end();
        } else if (url.startsWith('/v/')) {
            // Redirect '/v/' routes to the same path on the https://sky.snapi.com domain
            res.writeHead(301, { Location: `https://sky.snapi.com${url}` });
            res.end();
        } else {
            // Handle other paths (optional)
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        // Handle requests for other hosts (optional)
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request: Host not recognized');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
