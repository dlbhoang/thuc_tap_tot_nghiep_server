const adminMiddleware = (req, res, next) => {
    try {
      if (req.user.role !== 1) {
        return res.status(403).json({ message: "Only admin can perform this action" });
      }
      next();
    } catch (error) {
      console.error("Admin middleware error:", error);
      res.status(500).send('Server error');
    }
  };
  
  module.exports = adminMiddleware;
  