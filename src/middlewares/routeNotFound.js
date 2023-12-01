const routeNotFound = (req, res) => {
  const {url} = req;
  res.status(400).json({ error: `route "${url} not found"` });
};


export default routeNotFound