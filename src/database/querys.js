import { createNewDevice } from "../controllers/devices.controller";

export const queries = {
    getAllDevices: "SELECT * FROM Devices",
    addNewDevice: "INSERT INTO Devices (name, model, device_storage) VALUES (@name, @model, @device_storage)",
    getDeviceById: "SELECT * FROM Devices WHERE id = @id",
    deleteDevice: "DELETE FROM [webcrud].[dbo].[Devices] WHERE id = @id",
    getTotalDevices: "SELECT COUNT(*) FROM Devices",
    updateDeviceById: "UPDATE Devices SET name = @name, model = @model, device_storage = @device_storage WHERE id = @id",
};