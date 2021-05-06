const UserServices = require('../services/UserServices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {
static async AddUser (req,res,next) {
  try {
    const userToAdd = {
      name:req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
    }
    const user = await UserServices.findUserbyEmail(req.body.email);
    if(user) {
      return res.status(409).json({
        status:res.statusCode,
        message: 'User already exists'
      });
    } else {
      const pass = req.body.password;
      const hashPass = await bcrypt.hash(pass,10);
      const registeredUser  = await UserServices.createUser({ ...userToAdd, password: hashPass });

      const token  = await jwt.sign({...userToAdd},process.env.JWT_SECRETEKEY);

      return res.status(201).json({
        status: res.statusCode,
        message: 'user Created successfully',
        data:{
          token
        } 
      });

    }
  
  } catch (error) {
    return next(error);
  }
}

static async users (req,res,next) {
  try {
    const users = await UserServices.users();
    return res.status(200).json({
      status: res.statusCode,
      users: users
    });
  } catch (error) {
    return next(error);
  }
}
static async singleUser(req,res,next){
  try {
    const user = await UserServices.singleUser(req.params.id);
    if(!user){
      return res.status(409).json({
        status: res.statusCode,
        message: 'User not found'
      });
    } else {
      return res.status(200).json({
        status:res.statusCode,
        user
      });
    }
  } catch (error) {
    return next(error);
  }
}

}

module.exports = UserController;