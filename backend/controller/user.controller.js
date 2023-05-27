// const asyncHandler = require("express-async-handler");
// const { validationResult } = require("express-validator");
// const { User } = require("../model/user.model");

// const registerController = asyncHandler(async (req, res) => {
//   let { username, profile_picture } = req.body;
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).send({ error: errors.array()[0].msg });
//     }

//     const isUsername = await User.findOne({ username });
//     if (isUsername) {
//       return res.status(400).send({ error: "This username already Exists!" });
//     }

//     let createUser = await User.create({ username, profile_picture });

//     return res.send({ msg: "Successfully Register!" });
//   } catch (error) {
//     return res.status(500).send({ error: "Somthing Went Wrong!" });
//   }
// });

const { User } = require("../model/user.model");

const register = async (req, res) => {
  try {
    const { username, profile_picture } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const newUser = new User({
      username,
      profile_picture,
    });

    let d=await newUser.save();
    return res.send(d)
    // return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  register,
};
