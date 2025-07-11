import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
const login = async (req, res) =>{
    const { email, password } = req.body;
    // Validate the input
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }   
    try {
        const user = await User.findOne({ email })
        if (!user){
            return res.status(404).json({ message: "user not found, signup instead" })
        }
        // Compare the provided password with the hashed password in the database
        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            return res.status(404).json({ message: "invalid password"});
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // create a session for the user
        req.session.user = {
            id: user._id,
            token  
        };
        //send response with user data and token

        res.status(200).json({ message: "Login successful", details: {
            id: user._id,
            username: user?.username,
            email: user.email,
            createdAt: user.createdAt,
            profilePicture: user.profilePicture || "",
            followers: user.followers.length,
            following: user.following.length,
            favorites: user.favorites.length,
        }});     
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default login;
