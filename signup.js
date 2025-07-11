import User from '../models/users.js';
import bcrypt from 'bcryptjs';
const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res
            .status(400)
            .json({message:"user already exists, login instead"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

    // creat new user to the database
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        profilePicture: "https://example.com/default-profile-picture.png"
    });
    // save new user to the database
    await newUser.save();
    res.status(201).json({
        message: "User created successfully",
        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePicture: newUser.profilePicture
        }
    });
    }   catch (error) {
        if (error) {
            return res.status(500).json({message: "Internal server error"});
            console.error(error.message);
        }
    }
}

export default signup;