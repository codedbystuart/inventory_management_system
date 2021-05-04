
const db = require('../models');
const { User } = db;

class userServices {
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

}

module.exports = userServices;