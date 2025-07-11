import jwt from "jsonwebtoken";
import dotenv from "dotenv";    
dotenv.config();
const isAuthenticated = (req, res, next) => {
    const session = req.session.user; // Access the session object
    if (!session) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    const token = session.token; // Get the token from the session
    // const token = req.headers.authorization?.split(" ")[1]; // Alternatively, you can get the token from the Authorization header
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    // Verify the token
    // If the token is valid, the decoded user information will be available
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the user information to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};
export default isAuthenticated;
// This middleware checks if the user is authenticated by verifying the JWT token.
// If the token is valid, it attaches the user information to the request object and calls the next middleware or route handler.
// If the token is missing or invalid, it responds with an appropriate error message.