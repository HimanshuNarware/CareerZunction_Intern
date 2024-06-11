// import User from "../models/userModel.js";

// export const getUserforNavbar = async(req, res) => {
//     try{
//         const loggedInUserId = req.user._id;
//         const filteredUsers = await User.find({ _id: { $ne: loggedInUserId}}).select("-password");

//         res.status(200).json(filteredUsers);
//     } catch(error){
//         console.error("Error in getUsersForSidebar:", error.message);
//         res.status(500).json({ error: "Internal server error"});
//     }
// };

import User from '../models/userModel.js';

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error("Error in getUserProfile controller:", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
        });
    } catch (error) {
        console.error("Error in updateUserProfile controller:", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

