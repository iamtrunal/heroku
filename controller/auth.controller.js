const authModel = require("../models/auth.model");
const mongoose = require("mongoose");

exports.register = async (req, res) => {
    const userData = new authModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    });

    try {
        if (req.body.password == req.body.confirmpassword) {
            const saveData = await userData.save();

            res.status(201).json({
                message: "User Registered",
                status: 201,
                data: saveData
            })
        } else {
            res.status(201).json({
                message: "User not Registered",
                status: 201,
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Something went Wrong",
            status: 400
        })
    }
};

exports.sendOtp = async (req, res) => {
    try {
        number = req.body.number;
        otp = 999999
        res.status(200).json({
            message: "Otp Send successfully",
            status: 200
        })
    } catch (error) {
        res.status(400).json({
            message: "Something went Wrong",
            status: 400
        })
    }
};

exports.login = async (req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;

        const user = await authModel.findOne({});

        const dbemail = user.email;
        const dbpassword = user.password;


        if (dbemail == email && dbpassword == password) {
            res.status(200).json({
                message: "Login Successful",
                status: 200
            });
        } else {
            res.json({
                message: 'Invalid Email Or Password',
                status: 401
            })
        }

    } catch (error) {
        res.status(400).json({
            message: "Something went Wrong",
            status: 400
        })
    }
};


exports.verifyOtp = (req, res) => {
    try {


        const otp1 = req.body.otp
        otp2 = 999999

        if (otp1 == otp2) {
            res.status(200).json({
                message: "Verify Otp Successful",
                status: 200
            });
        } else {
            res.json({
                message: 'Otp Not Verify',
                status: 401
            })
        }

    } catch (error) {
        res.status(400).json({
            message: "Something went Wrong",
            status: 400
        })
    }
};
