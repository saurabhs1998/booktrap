
const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config');

// User Model
const User = require('../../Model/USER_PROFILE/userProfile');
const UserCollection =require('../../Model/UserCollection/userCollection');

const JWT_SECRET=config.get('jwtSecret');


/**
 * Public
 */

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
 

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) {
         return res.status(400).json({
            error:"User does not exist"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            error:"Invalid credentials"
        })
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 36000 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 *    POST api/users
 *     Register new user
 *   Public
 */

router.post('/signup', async (req, res) => {
  const { name, email, password ,about} = req.body;
  // Simple validation
  
  try {
    const user = await User.findOne({ email });
    if (user) 
    {
        return res.status(400).json({
            error:"User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({
      name,
      email,
      about,
      password: hash
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 36000
    });
    const newUserCollection=new UserCollection({
       name,about
    })
    newUserCollection.save();
    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
        about:savedUser.about
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});




module.exports=router;