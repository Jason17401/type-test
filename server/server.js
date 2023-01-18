import path from 'path';
import express from 'express';

const app = express();
const PORT = 8080;

app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});