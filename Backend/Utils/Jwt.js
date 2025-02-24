const jwt = require('jsonwebtoken');

const TOKEN = process.env.JWT_KEY;

const jwtAuthMiddleware = (req, res, next) => {
    // Check if authorization header exists
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Please Provied a Token' });

    // Extract token
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        // Verify the JWT Token
        const decoded = jwt.verify(token, TOKEN);

        // Attach user information to request
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "Invalid Token" });
    }
};

// Function to generate JWT
const generateToken = (userData) => {
    const payload = { 
      id:userData.id,
      name:userData.name,
      
    };
    return jwt.sign(payload, TOKEN, { expiresIn: '8h' }); // Set expiration time
};

module.exports = { jwtAuthMiddleware, generateToken };