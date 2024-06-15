const express = require("express");
const router = express.Router();
const userData = require("../Schema/userDataModel");
//CREATE
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, photo,fireBaseId } = req.body;
  try {
    const userAdded = await userData.create({
      name: name,
      email: email,
      photo: photo,
      playlist:[],
      playhistory:[],
      liked:[],
      fireBaseId:fireBaseId,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


router.post("/", async (req, res) => {

  const { fireBaseId } = req.body;

  try {
    const singleUser = await userData.findOne({ fireBaseId: fireBaseId });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/addremoveplaylist", async (req, res) => {

  const { id,playlist } = req.body;

  try {
    const singleUser = await userData.findByIdAndUpdate( id,
     { playlist:playlist} );
console.log(singleUser)
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




router.post("/addremoveuserlike", async (req, res) => {

  const { id,liked } = req.body;

  try {
    const singleUser = await userData.findByIdAndUpdate( id,
     { liked:liked} );
    console.log(singleUser)
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





module.exports = router;