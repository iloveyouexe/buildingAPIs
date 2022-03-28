const express = require("express");
const chirpsStore = require("../chirpstore");
let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
});

router.post("/", (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/", (req, res) => {
  chirpsStore.UpdateChirp(req.body.id, req.body.chirp);
  res.sendStatus(200);
});

router.delete("/", (req, res) => {
  console.log(req.body);
  chirpsStore.DeleteChirp(req.body.id);
  res.sendStatus(200);
});

module.exports = router;
