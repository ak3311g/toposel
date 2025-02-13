const User = require("../models/user");

// Search user by username or email (Protected Route)
exports.searchUser = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const user = await User.findOne({
      $or: [{ username: query }, { email: query }],
    }).select("-password"); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
