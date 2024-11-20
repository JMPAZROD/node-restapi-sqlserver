import { Router } from 'express';

import { createNewDevice, getDevices, getDeviceById, deleteDeviceById, getTotalDevices, updateDeviceById } from '../controllers/devices.controller';

const router = Router();

router.get("/devices", getDevices);

router.post("/devices/create", createNewDevice);

router.get("/devices/count", getTotalDevices);

router.get("/devices/:id", getDeviceById);

router.delete("/devices/delete/:id", deleteDeviceById);

router.put("/devices/update/:id", updateDeviceById);

export default router;
