var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");
const { Mahasiswa } = require("../models");

const v = new Validator();

router.post("/", async (req, res) => {
  const schema = {
    npm: "string",
    nama: "string",
    jurusan: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const mahasiswa = await Mahasiswa.create(req, body);
  res.json(mahasiswa);
});

module.exports = router;
