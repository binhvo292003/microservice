module.exports = function (req, res, next) {
  const apiKey = req.headers['x-api-key'];

  // check if api key is valid
  if (apiKey && apiKey === '123123123123') {
      next();
  } else {
      res.status(403).json({ message: 'Forbidden' });
  }
};