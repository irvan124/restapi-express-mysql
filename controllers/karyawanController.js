const { db } = require("../database/index");

module.exports = {
  getKaryawan: (req, res) => {
    let scriptQuery = `SELECT * FROM karyawan`;
    if (req.query.nama) {
      scriptQuery = `select * from karyawan where nama = ${db.escape(
        req.query.nama
      )}`;
    }

    db.query(scriptQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addKaryawan: (req, res) => {
    //   console.log(req.body);

    //   Destructuring req.body
    let { nama, usia, email, berat, kota, tahun, idposisi } = req.body;

    //   Query MySQL
    let insertQuery = `insert into karyawan values (null,
    ${db.escape(nama)},
    ${db.escape(usia)},
    ${db.escape(email)},
    ${db.escape(berat)},
    ${db.escape(kota)},
    ${db.escape(tahun)}, 
    ${db.escape(idposisi)})`;

    console.log(insertQuery);

    //   POSTING DATA
    db.query(insertQuery, (err, result) => {
      if (err) res.status(500).send(err);

      // res.status(200).send(result);
      db.query(
        `select * from karyawan where nama = ${db.escape(nama)}`,
        (err2, result2) => {
          if (err2) res.status(500).send(err2);
          res
            .status(200)
            .send({ message: "Penambahan Karyawan Berhasil", data: result2 });
        }
      );
    });
  },
  updateKaryawan: (req, res) => {
    let dataUpdate = [];
    // Kok bisa array jadi kumpulan String?
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }

    let updateQuery = `UPDATE karyawan set ${dataUpdate} WHERE idkaryawan = ${req.params.idkaryawan}`;
    console.log(dataUpdate);
    console.log(updateQuery);
    db.query(updateQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteKaryawan: (req, res) => {
    let deleteQuery = `DELETE FROM karyawan where idkaryawan = ${req.params.idkaryawan}`;

    db.query(deleteQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
};
