exports.validateRegisterInput = (req, res, next) => {
    const { email, password, name, address, phone, role, birthdate } = req.body;
  
    if (!email || !password || !name || !address || !phone || !role || !birthdate) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number' });
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }
  
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdateRegex.test(birthdate)) {
      return res.status(400).json({ error: 'Invalid birthdate format. Use YYYY-MM-DD' });
    }
  
    next();
  };
  