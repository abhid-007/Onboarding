 const User = require('../models/userModel');
 const createError = require('../utils/appError');
 const bcrypt = require('bcryptjs');
 const jwt = required('jsonwebtoken'); 
 
exports.signUp = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(user){
            return next(new createError('User already exists', 400));
        }
      const hashedPassword = await bcrypt.hash(req.body.password, 12);

      const newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role
      });
      
      //Assign JWT to useer
    const token = jwt.sign({id: newUser._id}, 'secretkey123', {
        expiresIn: '90d',
    });
    
    res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
        token,
    });
    } catch (error){
        next(error);
    }
};

//LOGGING USER
exports.login = async (req, res, next) => {};
