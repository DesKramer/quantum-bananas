module.exports = async (req, res) => {
  try {
    res.status(200).json({ message: "Alt route" });
  } catch (err) {
    console.error(err.message);
  }
};
