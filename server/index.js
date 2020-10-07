const express = require('express');
const app = express();
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:roomId', express.static(`${__dirname}/../public`));

// PHOTO-GALLERY
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://localhost:3001/`, changeOrigin: true }));

// CALENDAR
app.use('/api/calendar', createProxyMiddleware({ target: `http://localhost:3002`, changeOrigin: true }));

// REVIEWS
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://localhost:3003`, changeOrigin: true }));

// MORE PLACES
app.use('/api/more_places', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

