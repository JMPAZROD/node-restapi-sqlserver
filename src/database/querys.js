import { createNewDevice } from "../controllers/devices.controller";

export const queries = {
    getAllDevices: "SELECT * FROM Devices",
    addNewDevice: "INSERT INTO Devices (name, model, storage) VALUES (@name, @model, @storage)",
    getDeviceById: "SELECT * FROM Devices WHERE Id = @Id",
    deleteDevice: "DELETE FROM [webcrud].[dbo].[Devices] WHERE Id = @Id",
    getTotalDevices: "SELECT COUNT(*) FROM Devices",
    updateDeviceById: "UPDATE Devices SET Name = @name, Model = @model, Storage = @storage WHERE Id = @Id",
};