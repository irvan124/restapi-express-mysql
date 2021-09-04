const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 2021;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World From Backend! Integrated with MySQL");
});

// USING MIDDLEWARE FROM ROUTER
const { karyawanRouters } = require("./routers");
app.use("/karyawan", karyawanRouters);

app.listen(PORT, () =>
  console.log(`Server is Online, Running on Port ${PORT}`)
);
