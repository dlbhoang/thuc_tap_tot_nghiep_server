require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../model/user');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
    const decodedToken = token.replace('Bearer ', ''); // Loại bỏ 'Bearer ' từ token
    const decoded = jwt.verify(decodedToken, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = authMiddleware;
