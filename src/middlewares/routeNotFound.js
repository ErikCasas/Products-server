const routeNotFound = (req, res) => {
  const route = req.url;
  res.status(400).json({ error: `route "${route} not found"` });
};


export default routeNotFound