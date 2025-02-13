const express = require("express");
const { searchUser } = require("../controller/userController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Search user route (Protected with JWT)
router.get("/search", authMiddleware, searchUser);

module.exports = router;