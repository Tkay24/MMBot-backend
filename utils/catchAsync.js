const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .then((result) => {
       if (result === undefined) return;
      if (Array.isArray(result) && result.length === 2 && typeof result[0] === 'number' && typeof result[1] === 'object') {
        const [statusCode, response] = result;
        return res.status(statusCode).json(response);
      }
      res.json(result);
    })
    .catch((err) => {
      next(err); 
};
