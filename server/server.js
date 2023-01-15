import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();
const PORT = 8080;

app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});