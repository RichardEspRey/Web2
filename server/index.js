const express = require("express");
const app = express();
const mysql = require ("mysql");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);//namespace de las solicitudes hacia el server
app.use(express.json({ limit: '50mb' }));
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});

