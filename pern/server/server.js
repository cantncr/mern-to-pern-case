import express from 'express';
import cors from 'cors';
import { recordsRouter } from './routes/record.js';
import sequelize from './db/sequelize.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/record', recordsRouter);

sequelize
  .sync()
  .then(() => {
    console.log('DB synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to sync DB: ', err);
  });
