const jwt = require('jsonwebtoken');

// Secret key for signing the JWT (this should be kept secure)
const secretKey = 'vikash mishra';

// Middleware function for verifying JWT
const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  let token = req.headers.authorization;

  // If no token is provided, return an error
  token=token.split(' ')[1]
  
  if (!token) {
    
    return res.status(403).json({error:'A token is required for authentication'});
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request object
    req.user = decoded;

  } catch (err) {
    // If the token is invalid, return an error
    return res.status(401).json({error:'Invalid Token'});
  }

  // Call the next middleware function
  return next();
};

module.exports = verifyToken;