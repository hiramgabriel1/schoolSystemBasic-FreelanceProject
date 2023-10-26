import mongoose from "mongoose";

const Model = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        Course: {
            type: String,
            required: true
        },
        NumberMat: {
            type: Number,
            required: true
        },
        NumberPhone: {
            type: Number,
        },
        NumberDoc: {
            type: Number
        }
    }
)

const UserModel = mongoose.model("studentsData", Model)

export default UserModel
