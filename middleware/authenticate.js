// middleware/authenticate.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Lấy token từ header Authorization
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Xác thực token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Error authenticating token:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
