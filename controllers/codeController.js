const db = require('../../db');

module.exports = async (req, res) => {
    const { code } = req.params;
    const connection = await db.getConnection();

    try {
        const [response1] = await connection.query('SELECT * FROM `urls` WHERE `code` = ?', [code]);
        const url = response1[0];

        if (url) {
            res.redirect(url.longUrl);
        } else {
            return res.status(500).json({ message: 'Internal server error...' });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error...' });
    }
};