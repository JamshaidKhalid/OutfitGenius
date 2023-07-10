const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
    res.status(400).json({
      message: "Email already exists. Please login to continue",
    });
  } else {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      {
        username,
        email,
        encryptedPassword,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "5d",
      }
    );
    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "Please Login to continue",
      token,
    });

  }
  } catch (err) {
    res.json(err);
  }
};

// for login of the user

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User does not exist",
      });
    } else {
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (verifyPassword) {
        const token = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );
        const { _id, username, email } = user;

        return res.status(200).json({
          message: "Successfully logged in",
          token,
          user: {
            _id,
            username,
            email,
          },
        });
      } else {
        res.status(400).json({
          message: "Password is incorrect",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

exports.isLoggedIn = async (req, res) => {
try{
    // extracting token from the authorizaton header of request 
    const token = req.headers.authorization;
    if(!token){
        return res.json({isLoggedIn: false})
    }
    if(token){
      // checking token is valid or not
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if(decoded){
        return res.json({isLoggedIn: true})
      }
      else{
        return res.json({isLoggedIn: false})
      }
    }

}catch(err){
    res.json({isLoggedIn: false});
}
}