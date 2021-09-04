const express = require("express");
const router = express.Router();

const { karyawanController } = require("../controllers");

// GET KARYAWAN
router.get("/get", karyawanController.getKaryawan);

// ADD KARYAWAN
router.post("/add", karyawanController.addKaryawan);

// UPDATE KARYAWAN (PATCH)
router.patch("/update:idkaryawan", karyawanController.updateKaryawan);

// DELETE KARYAWAN
router.delete("/delete:idkaryawan", karyawanController.deleteKaryawan);

module.exports = router;
