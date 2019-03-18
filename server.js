const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();
app.use(favicon(path.resolve(__dirname, 'public/favicon.ico')));
app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
