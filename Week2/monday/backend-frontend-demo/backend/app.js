import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import songsRouter from './routes/songs.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/songs', songsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
