const express = require("express");
const router = express.Router();

const { karyawanController } = require("../controllers");

// GET KARYAWAN
router.get("/", karyawanController.getKaryawan);

// ADD KARYAWAN
router.post("/", karyawanController.addKaryawan);

// UPDATE KARYAWAN (PATCH)
router.patch("/:idkaryawan", karyawanController.updateKaryawan);

// DELETE KARYAWAN
router.delete("/:idkaryawan", karyawanController.deleteKaryawan);

module.exports = router;
