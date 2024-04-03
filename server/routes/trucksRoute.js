import express from 'express';
import { 
  getTrucks, 
  getTruck
} from '../controllers/truck-controller.js';

const trucksRouter = express.Router();

trucksRouter.get('/trucks', getTrucks)
trucksRouter.get('/trucks/:id', getTruck)

export default trucksRouter