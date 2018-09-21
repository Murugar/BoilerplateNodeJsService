const { name } = require('../package.json');


module.exports = (req, res) => res.status(200).json({ name });
