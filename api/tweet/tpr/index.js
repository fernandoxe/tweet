const tpr = require('../../../data/tpr');
const config = require('../../../.config');
const { TwitterApi } = require('twitter-api-v2');
const tweet = require('../../../src/tweet');

const twitterClient = new TwitterApi({
  appKey: config.tpr.appKey,
  appSecret: config.tpr.appSecret,
  accessToken: config.tpr.accessToken,
  accessSecret: config.tpr.accessSecret,
});

const readWriteClient = twitterClient.readWrite;

module.exports = async (req, res) => {
  try {
    await tweet(tpr, readWriteClient);
    res.status(200).send(`Post ok`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}\n`, error);
  }
};
