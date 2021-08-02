const tpr = require('../../../data/tpr');
const config = require('../../../.config');
const Twit = require('twit');

const T = new Twit({
  consumer_key: config.tpr.consumer_key,
  consumer_secret: config.tpr.consumer_secret,
  access_token: config.tpr.access_token,
  access_token_secret: config.tpr.access_token_secret,
});

function getRandomTweet(tweets) {
  return tweets[Math.floor(Math.random() * tweets.length)];
}

module.exports = (req, res) => {
  const tweet = getRandomTweet(tpr);
  T.post('statuses/update', { status: tweet })
  .then((result) => {
    res.status(200).send(`Post ok: ${result.data.text}`);
  })
  .catch(err => {
    res.status(500).send(`Error: ${err.message} (${err.code})`);
  });
};