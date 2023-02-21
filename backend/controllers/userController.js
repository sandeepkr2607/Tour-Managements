import User from '../models/User.js';

// create new User
export const createTour = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Faild to create. Try again.',
    });
  }
};

// updare User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Faild to update. Try again.',
    });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Faild to delete. Try again.',
    });
  }
};

// get Single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    return res.status(200).json({
      success: true,
      message: 'Successful',
      data: user,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: 'Not found.',
    });
  }
};

// get All User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json({
      success: true,
      message: 'Successful',
      data: users,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: 'Not found.',
    });
  }
};
