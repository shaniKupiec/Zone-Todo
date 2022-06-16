const userService = require("./user.service");
const logger = require("../../services/logger.service");

module.exports = {
  getUser,
  updateUser,
};

async function getUser(req, res) {
  try {
    const user = await userService.getById(req.params.id);
    res.send(user);
  } catch (err) {
    logger.error("Failed to get user", err);
    res.status(500).send({ err: "Failed to get user" });
  }
}

async function updateUser(req, res) {
  try {
    logger.info("Backend update User");
    const user = req.body;
    const updatedUser = await userService.update(user);
    // socketService.emitTo({ type: "user-changed", data: user });
    res.json(updatedUser);
  } catch (err) {
    logger.error("Failed to update user", err);
  }
}
