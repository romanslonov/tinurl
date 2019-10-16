module.exports = (req, res) => {
  return res.sendFile(path.join(__dirname, '../../public', 'index.html'));
};