module.exports = (res, error) => {
  res.status(500).json({ error: error.toString() });
};
