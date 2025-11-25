import User from "../models/User.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const { name, bio, avatarUrl } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, bio, avatarUrl },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    next(err);
  }
};
