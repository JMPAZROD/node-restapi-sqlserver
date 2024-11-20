CREATE DATABASE webcrud;

GO

USE webcrud;

GO

CREATE TABLE Devices (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    device_storage VARCHAR(50) NOT NULL
);
