import Truck from '../models/Truck.js';

const handleError = (res, error) => {
  res.status(500).json({error})
}

const getTrucks = (req, res) => {
  Truck
    .find()
    .then((trucks) => {
      res
        .status(200)
        .json(trucks)
    })
    .catch((err) => handleError(res, err))
}

const getTruck = (req, res) => {
  Truck
    .findById(req.params.id)
    .then((truck) => {
      res
        .status(200)
        .json(truck)
    })
    .catch((err) => handleError(res, err))
}

export { getTrucks, getTruck }