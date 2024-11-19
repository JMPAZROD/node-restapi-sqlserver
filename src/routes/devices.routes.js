import { Router } from 'express';

import { createNewDevice, getDevices, getDeviceById, deleteDeviceById, getTotalDevices, updateDeviceById } from '../controllers/devices.controller';

const router = Router();

router.get("/devices", getDevices);

router.post("/devices", createNewDevice);

router.get("/devices/count", getTotalDevices);

router.get("/devices/:id", getDeviceById);

router.delete("/devices/:id", deleteDeviceById);

router.put("/devices/:id", updateDeviceById);

export default router;
