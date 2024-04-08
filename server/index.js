import express from 'express';
import { PORT, URL } from "./config.js"
import mongoose from "mongoose"
import cors from "cors"
import trucksRoutes from './routes/trucksRoute.js';
import requestsRoutes from './routes/requestsRoute.js';

// создание объекта приложения
const app = express();
// автоматический парсинг json
app.use(express.json());
app.use(cors());
app.use(trucksRoutes);
app.use(requestsRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send(`<h1>This is server</h1>`)
// });