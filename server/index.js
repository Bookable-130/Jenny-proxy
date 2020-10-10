const express = require('express');
const app = express();
const port=   3000;
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use('/rooms/:roomId', express.static(`${__dirname}/../public`));

app.listen( port, () => {
  console.log(`server running at http://localhost:${port}`)
})

// Photo-gallery
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://54.219.99.93:3001/`, changeOrigin: true }));

// Calender
app.use('/api/calendar', createProxyMiddleware({ target: `http://3.138.89.74:3002`, changeOrigin: true }));

// Reviews
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://3.136.76.170:3003/`, changeOrigin: true }));

// More Places to Stay
app.use('/api/more_places', createProxyMiddleware({ target: `http://13.52.57.57:3004/`, changeOrigin: true}));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://13.52.57.57:3004/`, changeOrigin: true}));
app.use('/api/create_list', createProxyMiddleware({ target: `http://13.52.57.57:3004/`, changeOrigin: true}));
app.use('/api/update_listing', createProxyMiddleware({ target: `http://13.52.57.57:3004/`, changeOrigin: true}));
app.use('/api/update_collection', createProxyMiddleware({ target: `http://13.52.57.57:3004//`, changeOrigin: true}));
app.use('/api/collection_name', createProxyMiddleware({ target: `http://13.52.57.57:3004/`, changeOrigin: true}));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});




