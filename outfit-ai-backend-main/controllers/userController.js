// user controller will have many functions, like index, create, update , delete etc 

// Path: outfit-ai-backend/controllers/userController.js

const User = require('../models/User');

exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.json(err);
  }
};




