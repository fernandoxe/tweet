const tpr = require('../../../data/tpr');

module.exports = (req, res) => {
  res.status(200).send(tpr[0]);
};