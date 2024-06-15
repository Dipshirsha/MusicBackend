const express = require("express");
const router = express.Router();
const songData = require("../Schema/songDataModel");


router.post("/addsong", async (req, res) => {
    console.log(req.body);
    const { name, imgUrl, audioUrl, type,artistName,artistId,albumName,albumId,language,date } = req.body;
    try {
      const songAdded = await songData.create({
        name: name,
        imgUrl: imgUrl,
        audioUrl: audioUrl,
        type: type,
        artistName: artistName,
        artistId: artistId,
        albumId: albumId,
        albumName: albumName,
        likes: 0,
        language: language,
        date:date,
      });
      res.status(201).json(songAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });


  router.get("/song", async (req, res) => {
    try {
      const allSong = await songData.find();
      res.status(200).json(allSong);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.post("/fetchplaylist", async (req, res) => {
  try {
    const {id} = req.body;
    const singleSong = await songData.findById(id);
    res.status(200).json(singleSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/addremovesonglike", async (req, res) => {
  const { id,likes } = req.body;

  try {
    const singleSong = await songData.findByIdAndUpdate( id,
     { likes:likes} );
    console.log(singleSong)
    res.status(200).json(singleSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  module.exports = router;