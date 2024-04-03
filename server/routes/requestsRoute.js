import express from 'express';
import { 
  getRequests, 
  addRequest
} from '../controllers/request-controller.js';

const requestsRouter = express.Router();

requestsRouter.get('/requests', getRequests)
requestsRouter.post('/requests', addRequest)

export default requestsRouter