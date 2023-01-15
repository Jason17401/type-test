import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();
const PORT = 8080;

const router = express.Router();

router.use('^/$', (req, res, next) => {
    const appContents = ReactDOMServer.renderToString(
        <StaticRouter location={ req.url }>
            <App />
        </StaticRouter>
    );

    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("An error has occurred");
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ appContents }</div>`));
    });
});

router.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});