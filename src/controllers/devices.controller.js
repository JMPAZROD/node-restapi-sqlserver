import { getConnection, sql, queries } from "../database";

export const getDevices = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDevices);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewDevice = async (req, res) => {
    const { name, model, device_storage } = req.body;

    if (name == null || model == null || device_storage == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    try {
        const pool = await getConnection();

        await pool.request()
            .input("name", sql.VarChar, name)
            .input("model", sql.VarChar, model)
            .input("device_storage", sql.VarChar, device_storage)
            .query(queries.addNewDevice);

        res.json({name, model, device_storage});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDeviceById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input('id', id).query(queries.getDeviceById);

    res.send(result.recordset[0]);
};

export const deleteDeviceById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool.request().input('id', id).query(queries.deleteDevice);

    res.sendStatus(204);
};

export const getTotalDevices = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotalDevices);

    res.json(result.recordset[0]['']);
};

export const updateDeviceById = async (req, res) => {
    const { name, model, device_storage } = req.body;
    const {id} = req.params;

    if (name == null || model == null || device_storage == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    const pool = await getConnection();
    await pool.request()
        .input('name', sql.VarChar, name)
        .input('model', sql.VarChar, model)
        .input('device_storage', sql.VarChar, device_storage)
        .input('id', sql.Int, id)
        .query(queries.updateDeviceById);

    res.json({name, model, device_storage});
};