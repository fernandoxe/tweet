const getRandomTweet = (tweets) => {
  return tweets[Math.floor(Math.random() * tweets.length)];
}

module.exports = async (tweets, TWClient) => {
  const tweet = getRandomTweet(tweets);
  await TWClient.v2.tweet(tweet);
};
