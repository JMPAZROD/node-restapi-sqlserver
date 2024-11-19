import express from 'express';
import config from './config';

import devicesRoutes from './routes/devices.routes';

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(devicesRoutes);

export default app;