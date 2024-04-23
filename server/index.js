import express from 'express';
import path from'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { PORT, URL } from "./config.js"
import mongoose from "mongoose"
import cors from "cors"
import trucksRoutes from './routes/trucksRoute.js';
import requestsRoutes from './routes/requestsRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// создание объекта приложения
const app = express();
app.use(cors());
// автоматический парсинг json
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(trucksRoutes);
app.use(requestsRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});

app.get('/api/booklet/:id', (req, res) => {
  const { id } = req.params;
  const bookletPath = path.join(__dirname, 'api', 'booklet', `${id}.pdf`);

  res.sendFile(bookletPath, (err) => {
      if (err) {
          console.error('Ошибка при отправке файла:', err);
          res.status(404).send('Буклет не найден');
      }
  });
});