const validurl = require('valid-url');
const shortid = require('shortid');
const db = require('../db');

module.exports = async (req, res) => {
    const { url } = req.body;
    const code = shortid.generate();
    const { HOSTNAME, PORT } = process.env;

    if (validurl.isUri(url)) {
        const connection = await db.getConnection();

        try {
            const [response1] = await connection.query('SELECT * FROM `urls` WHERE `longUrl` = ?', [url]);
            const foundURL = response1[0];

            if (foundURL) {
                return res.status(200).json(foundURL);
            } else {
                const shortUrl = `http://${HOSTNAME}:${PORT}/${code}`;
                const [response2] = await connection.query('INSERT INTO `urls` (longUrl, shortUrl, code) VALUES (?, ?, ?)', [url, shortUrl, code]);
                const [response3] = await connection.query('SELECT * FROM `urls` WHERE `id` = ?', [response2.insertId]);
                const createdURL = response3[0];

                return res.status(200).json(createdURL);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error...' });
        } finally {
            if (connection) connection.release();
        }
    } else {
        return res.status(500).json({ message: 'Invalid url' });
    }
};