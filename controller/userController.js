const User = require('../model/user');

exports.getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: "Only admin can perform this action" });
    }
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send('Error retrieving users');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: "Only admin can perform this action" });
    }
    const userId = req.params.id;
    await User.destroy({ where: { id: userId } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send('Error deleting user');
  }
};

exports.filterUsers = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: "Only admin can perform this action" });
    }
    const { name, createdAt, role } = req.query;
    const filterOptions = {};

    if (name) {
      filterOptions.email = name;
    }

    if (createdAt) {
      filterOptions.createdAt = createdAt;
    }

    if (role) {
      filterOptions.role = role;
    }

    const users = await User.findAll({ where: filterOptions });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error filtering users:", error);
    res.status(500).send('Error filtering users');
  }
};
