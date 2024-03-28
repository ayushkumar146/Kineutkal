const User = require("../models/signup");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const buser=require("../models/login");
const generateToken=require("../config/generateToken");


exports.signupUser = async (req, res) => {
    const { username, age, gender,email, password } = req.body;
    // console.log(User);
     
    try {
      // Hash the password
      if(!username || !email || !password || !age || !gender){
        return res.status(400).json({ message: '5 field bharni h, wo bhi nhi bhari jari' });
      }

      const chuser=await User.findOne({email});
if(chuser){
  return res.status(404).json({ message: 'dubara aake khud ko cool samajh rha h?' });
}

      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user in the database
      const user = await User.create({
        username,
        age,
        gender,
        email,
        password: hashedPassword
      });

      const newbuser= await buser.create({
        email,
        password: hashedPassword
      });
  
      // Generate JWT token
      const token = generateToken(user._id);

  
      // Send token to client
      res.status(201).json({ user });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};

exports.loginuserdata = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

