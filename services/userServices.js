
const db = require('../models');
const { User } = db;

class UserServices {
  static async findUserbyEmail (email) {
    try {
      const user = await User.findOne({where: {email} });
      return user;
    } catch (error) {
      throw error;
    }
  }
static async createUser (user) {
  try {
    const userToCreate = await User.create(user);
    return userToCreate;
  } catch (error) {
    throw error;
  }
}
static async users (users){
  try {
    const getUsers = await User.findAll(users);
    return getUsers;
  } catch (error) {
    throw error;
  }
}
static async singleUser (id) {
  try{
    const user = await User.findOne({where: {id:Number(id)}});
    return user;
  } catch(error){
    throw error;
  }
}
static async updateUser (id,updatedUser) {
  try {
    const userToUpdate = await User.findOne({where: {id:Number(id)}});
    if(!userToUpdate) return null;
    await User.update(updatedUser, {where: {id:Number(id)}}); 
    return userToUpdate;
  } catch (error) {
    throw error;
  }
}
}

module.exports = UserServices;