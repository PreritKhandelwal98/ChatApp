const getUserDetailsFromToken = require('../helpers/getUserDetailFromToken');
const UserModel = require('../models/UserModel');
async function updateUserDetails(req, res) {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Extract token from headers
        const user = await getUserDetailsFromToken(token);

        const { name, profile_pic } = req.body;

        const updateUser = await UserModel.updateOne({ _id: user._id }, {
            name,
            profile_pic
        })

        const userInfo = await UserModel.findById(user._id)

        return res.status(200).json({
            message: "User Updated",
            data: userInfo,
            success: true
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message || err,
            err: true
        })
    }
}

module.exports = updateUserDetails