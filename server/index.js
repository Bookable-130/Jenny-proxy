const express = require('express');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/rooms/:roomId', express.static(`${__dirname}/../public`));
const port = 3000;

// PHOTO-GALLERY
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://localhost:3001/`, changeOrigin: true }));

// CALENDAR
app.use('/api/calendar', createProxyMiddleware({ target: `http://localhost:3002`, changeOrigin: true }));

// REVIEWS
// app.use('/rooms/*', createProxyMiddleware({ target: `http://localhost:3003`, changeOrigin: true }));
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://localhost:3003`, changeOrigin: true }));

// MORE PLACE TO STAY
app.use('/api/more_places', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

