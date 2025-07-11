import User from "../models/users.js";

const getProfile = async (req, res) => {
  const userId = req.params.id || req.user.id; // Get the user ID from the request parameters

  try {
    const user = await User.findById(userId).select("-password -__v"); // Find the user by ID and exclude password and version field
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User profile retrieved successfully",
      details: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        profilePicture: user.profilePicture || "https://example.com/default-profile-picture.png",
        followers: user.followers.length,
        following: user.following.length,
        favorites: user.favorites.length,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error.message);
  }
};

export default getProfile;
// This controller retrieves the user profile based on the user ID provided in the request parameters or from