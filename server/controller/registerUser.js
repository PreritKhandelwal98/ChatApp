const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const axios = require('axios');
async function registerUser(req, res) {
    try {
        const { name, email, password, profile_pic } = req.body

        const checkEmail = await UserModel.findOne({ email });


        //checking user presence 
        if (checkEmail) {
            return res.status(400).json({
                message: "User Already Exists",
                error: true
            })
        }

        const hunterApiKey = process.env.HUNTER_API_KEY;

        const hunterUrl = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${hunterApiKey}`;

        let emailVerificationResponse;
        try {
            emailVerificationResponse = await axios.get(hunterUrl);
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error("Invalid email address:", err.response.data);
                return res.status(400).json({
                    message: "Invalid email address",
                    error: true
                });
            } else {
                console.error("Email verification error:", err.response ? err.response.data : err.message);
                return res.status(500).json({
                    message: "Email verification failed",
                    error: true
                });
            }
        }

        const emailStatus = emailVerificationResponse.data.data.status;
        // Check the email verification status
        if (emailStatus !== 'valid') {
            return res.status(400).json({
                message: "Invalid email address",
                error: true
            });
        }


        //password into hashed
        const salt = await bcrypt.genSalt(10);
        const hashpasword = await bcrypt.hash(password, salt);

        //returing the payload
        const payload = {
            name,
            email,
            profile_pic,
            password: hashpasword
        }

        const user = await UserModel(payload);
        const userSave = await user.save();

        return res.status(200).json({
            message: "User Created Successfully",
            data: userSave,
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message || err,
            err: true
        })
    }
}

module.exports = registerUser