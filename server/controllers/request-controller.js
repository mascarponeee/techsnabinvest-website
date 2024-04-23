import Request from '../models/Request.js';

const handleError = (res, error) => {
  res.status(500).json({error})
}

const getRequests = (req, res) => {
  Request
    .find()
    .sort({createdAt: 1})
    .then((requests) => {
      res
        .status(200)
        .json(requests)
    })
    .catch((err) => handleError(res, err))
}

const addRequest = (req, res) => {
  const request = new Request(req.body);
  request
  .save()
  .then((result) => {
    res
      .status(201)
      .setHeader("Access-Control-Allow-Origin", "*")
      .json(result)
  })
  .catch((err) => handleError(res, err))
}

export { getRequests, addRequest }